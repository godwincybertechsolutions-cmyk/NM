import React, { useState } from 'react';
import { Calendar, Users, ChevronDown } from 'lucide-react';
import { PROPERTIES, SAFARIS } from '../constants';
import { PropertyType } from '../types';

export const BookingWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stay' | 'safari'>('stay');

  const properties = PROPERTIES;
  const safaris = SAFARIS;

  return (
    <div className="bg-white shadow-2xl rounded-sm p-6 md:p-8 max-w-4xl mx-auto -mt-16 relative z-30 border-t-4 border-brand-accent">
      <div className="flex space-x-8 mb-6 border-b border-gray-100 pb-2">
        <button
          onClick={() => setActiveTab('stay')}
          className={`text-sm font-bold uppercase tracking-widest pb-2 transition-colors ${
            activeTab === 'stay' ? 'text-brand-black border-b-2 border-brand-black' : 'text-gray-400'
          }`}
        >
          Book a Stay
        </button>
        <button
          onClick={() => setActiveTab('safari')}
          className={`text-sm font-bold uppercase tracking-widest pb-2 transition-colors ${
            activeTab === 'safari' ? 'text-brand-black border-b-2 border-brand-black' : 'text-gray-400'
          }`}
        >
          Book a Safari
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-xs uppercase font-bold text-gray-500">
            {activeTab === 'stay' ? 'Property' : 'Itinerary'}
          </label>
          <div className="relative">
            <select className="w-full bg-gray-50 border border-gray-200 p-3 text-sm text-brand-black focus:outline-none focus:border-brand-accent appearance-none truncate pr-8">
              {activeTab === 'stay' ? (
                <>
                  <option value="">Select Property...</option>
                  <optgroup label="Mt. Kenya Villas">
                    {properties.filter(p => p.type === PropertyType.VILLA).map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Nairobi Apartments">
                    {properties.filter(p => p.type === PropertyType.APARTMENT).map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </optgroup>
                </>
              ) : (
                <>
                  <option value="">Select Safari...</option>
                  {safaris.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </>
              )}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase font-bold text-gray-500">Dates</label>
          <div className="relative flex items-center bg-gray-50 border border-gray-200 p-3">
            <Calendar size={16} className="text-gray-400 mr-2 shrink-0" />
            <input type="date" className="bg-transparent text-sm w-full focus:outline-none text-brand-black uppercase" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase font-bold text-gray-500">Guests</label>
          <div className="relative flex items-center bg-gray-50 border border-gray-200 p-3">
            <Users size={16} className="text-gray-400 mr-2 shrink-0" />
            <select className="bg-transparent text-sm w-full focus:outline-none text-brand-black appearance-none">
              <option>2 Adults</option>
              <option>1 Adult</option>
              <option>Family (2A + 2C)</option>
              <option>Group (5+)</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
          </div>
        </div>

        <button className="bg-brand-black text-white h-[46px] w-full font-bold uppercase text-xs tracking-widest hover:bg-brand-accent transition-colors shadow-md">
          Check Availability
        </button>
      </div>
    </div>
  );
};
