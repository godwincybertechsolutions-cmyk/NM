# New Manyatta Kenya

A luxury digital experience for premium Mt. Kenya vacation homes, Nairobi apartments, and exclusive safari itineraries.

## Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **AI**: Google Gemini API (`@google/genai`) via `gemini-2.5-flash`
- **Backend**: Supabase (Database, Auth, Edge Functions)

---

## Supabase Setup Guide

### 1. Database Schema (SQL)
Run the following SQL in your Supabase SQL Editor to set up the tables and security policies.

```sql
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES (Extends Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text,
  phone_number text,
  role text default 'user', -- 'user' or 'admin'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Policies
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on profiles for update using (auth.uid() = id);

-- 2. PROPERTIES
create type property_type as enum ('VILLA', 'APARTMENT');

create table public.properties (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  type property_type not null,
  location text not null,
  price_text text not null, -- Display text e.g. "Ksh 8,000 / Night"
  price_amount decimal(10,2), -- Numeric for filtering
  description text,
  highlights text[],
  amenities text[],
  image_url text,
  gallery_link text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.properties enable row level security;
create policy "Properties are viewable by everyone" on properties for select using (true);

-- 3. SAFARIS
create table public.safaris (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  duration text not null,
  description text,
  highlights text[],
  timeline jsonb, -- Stores array of {day, title, description}
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.safaris enable row level security;
create policy "Safaris are viewable by everyone" on safaris for select using (true);

-- 4. BOOKINGS
create type booking_status as enum ('PENDING', 'CONFIRMED', 'CANCELLED');

create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id),
  item_id uuid not null, -- ID of Property or Safari
  item_type text not null, -- 'PROPERTY' or 'SAFARI'
  start_date date not null,
  end_date date, -- Nullable for single day activities
  guests int default 1,
  total_price decimal(10,2),
  status booking_status default 'PENDING',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.bookings enable row level security;
create policy "Users can view own bookings" on bookings for select using (auth.uid() = user_id);
create policy "Users can create bookings" on bookings for insert with check (auth.uid() = user_id);
```

---

### 2. Edge Functions

Deploy these functions to Supabase to handle secure logic.

#### A. `secure-chat`
**Purpose**: Proxies calls to Gemini API so your API Key isn't exposed on the client.

```typescript
// supabase/functions/secure-chat/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { GoogleGenAI } from "https://esm.run/@google/genai";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { message, history } = await req.json();
    
    // Initialize Gemini with server-side environment variable
    const ai = new GoogleGenAI({ apiKey: Deno.env.get('GEMINI_API_KEY') });
    
    // System instruction context
    const systemInstruction = `You are the AI Concierge for New Manyatta Kenya...`; // (Full context from frontend)

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: { systemInstruction }
    });

    // Replay history if needed, or just send new message
    const result = await chat.sendMessage({ message });
    const text = result.text;

    return new Response(JSON.stringify({ text }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
```

#### B. `process-booking`
**Purpose**: Validates dates and simulates a payment process.

```typescript
// supabase/functions/process-booking/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    const { itemId, itemType, startDate, endDate, guests } = await req.json();

    // 1. Check Availability (Simplified logic)
    const { data: conflicts } = await supabase
      .from('bookings')
      .select('id')
      .eq('item_id', itemId)
      .eq('status', 'CONFIRMED')
      .or(`start_date.lte.${endDate},end_date.gte.${startDate}`);

    if (conflicts && conflicts.length > 0) {
      throw new Error("Selected dates are not available.");
    }

    // 2. Mock Payment Gateway Call
    // const paymentResult = await stripe.paymentIntents.create({...});
    const paymentSuccess = true; 

    if (!paymentSuccess) throw new Error("Payment failed");

    // 3. Insert Booking
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        { 
          item_id: itemId, 
          item_type: itemType, 
          start_date: startDate, 
          end_date: endDate, 
          guests, 
          status: 'CONFIRMED' 
        }
      ])
      .select();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, booking: data[0] }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
```

#### C. `generate-itinerary`
**Purpose**: Generates a personalized itinerary PDF using AI and PDF libraries.

```typescript
// supabase/functions/generate-itinerary/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { GoogleGenAI } from "https://esm.run/@google/genai";
import { PDFDocument, StandardFonts, rgb } from 'https://cdn.skypack.dev/pdf-lib';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { preferences, destination } = await req.json();
    const apiKey = Deno.env.get('GEMINI_API_KEY');
    const ai = new GoogleGenAI({ apiKey });

    // 1. Generate Content with AI
    const prompt = `Create a 3-day luxury itinerary for ${destination} focusing on: ${preferences}. Format as a plain text list.`;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    const itineraryText = response.text;

    // 2. Create PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    page.drawText(`Your New Manyatta Itinerary: ${destination}`, {
      x: 50,
      y: height - 50,
      size: 20,
      font: titleFont,
      color: rgb(0.86, 0.33, 0.21), // Brand Accent Color
    });

    page.drawText(itineraryText, {
      x: 50,
      y: height - 100,
      size: 12,
      font: font,
      lineHeight: 18,
      maxWidth: width - 100,
    });

    const pdfBytes = await pdfDoc.save();

    // 3. Return PDF as base64 or upload to storage and return URL
    // Here we return base64 for simplicity
    const base64Pdf = btoa(String.fromCharCode(...pdfBytes));

    return new Response(JSON.stringify({ pdfBase64: base64Pdf }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
```
