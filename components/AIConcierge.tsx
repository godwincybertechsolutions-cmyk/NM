import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import clsx from 'clsx';
import { PROPERTIES, SAFARIS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your personal concierge at New Manyatta. How can I assist you with your luxury escape today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Chat Session
  useEffect(() => {
    if (!chatSessionRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct context from constants
      const context = `
        You are the AI Concierge for "New Manyatta Kenya", a luxury brand offering:
        1. Mt. Kenya Vacation Homes (Villas)
        2. Nairobi Apartments (Urban Luxury)
        3. Premium Safaris
        
        Here is our current portfolio:
        PROPERTIES: ${JSON.stringify(PROPERTIES)}
        SAFARIS: ${JSON.stringify(SAFARIS)}

        Tone: Professional, warm, luxurious, knowledgeable, and helpful.
        Goal: Assist users in choosing the right property or safari, answer questions about amenities, and encourage bookings.
        Formatting: Keep responses concise. Use Markdown for bolding key terms.
        Currency: USD.
        
        If asked about booking availability, strictly say: "Please use the booking widget on the home page or contact our reservations team directly for real-time availability."
      `;

      chatSessionRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: context,
        },
      });
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response: GenerateContentResponse = await chatSessionRef.current.sendMessage({ 
        message: userMessage 
      });
      
      const text = response.text || "I apologize, I'm having trouble connecting to the service right now.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered a temporary error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105",
          isOpen ? "bg-brand-black text-white" : "bg-brand-accent text-white"
        )}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      <div
        className={clsx(
          "fixed bottom-24 right-6 z-40 w-[90vw] md:w-[400px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col",
          isOpen ? "opacity-100 scale-100 h-[600px] max-h-[80vh]" : "opacity-0 scale-90 h-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-brand-black p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="text-brand-accent" size={18} />
            <h3 className="font-serif text-white font-bold tracking-wide">Concierge</h3>
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-widest">AI Assistant</span>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-light/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex w-full",
                msg.role === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={clsx(
                  "max-w-[85%] p-3 rounded-lg text-sm leading-relaxed",
                  msg.role === 'user'
                    ? "bg-brand-black text-white rounded-tr-none"
                    : "bg-white border border-gray-200 text-brand-black rounded-tl-none shadow-sm"
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-tl-none shadow-sm flex items-center space-x-2">
                 <Loader size={16} className="animate-spin text-brand-accent" />
                 <span className="text-xs text-gray-500">Thinking...</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about safaris, villas..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-brand-accent text-brand-black"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-brand-accent text-white rounded-md hover:bg-brand-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};