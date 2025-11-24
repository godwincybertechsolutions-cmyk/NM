import React, { useState } from 'react';
import { Calendar, Users, ChevronDown } from 'lucide-react';

export const BookingWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stay' | 'safari'>('stay');

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
            <select className="w-full bg-gray-50 border border-gray-200 p-3 text-sm text-brand-black focus:outline-none focus:border-brand-accent appearance-none">
              {activeTab === 'stay' ? (
                <>
                  <option>Select Property...</option>
                  <option>Mt. Kenya Villas</option>
                  <option>Nairobi Apartments</option>
                </>
              ) : (
                <>
                  <option>Select Safari...</option>
                  <option>Great Migration</option>
                  <option>Samburu Explorer</option>
                </>
              )}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={16} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase font-bold text-gray-500">Dates</label>
          <div className="relative flex items-center bg-gray-50 border border-gray-200 p-3">
            <Calendar size={16} className="text-gray-400 mr-2" />
            <input type="date" className="bg-transparent text-sm w-full focus:outline-none text-brand-black" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase font-bold text-gray-500">Guests</label>
          <div className="relative flex items-center bg-gray-50 border border-gray-200 p-3">
            <Users size={16} className="text-gray-400 mr-2" />
            <select className="bg-transparent text-sm w-full focus:outline-none text-brand-black appearance-none">
              <option>2 Adults</option>
              <option>1 Adult</option>
              <option>Family (2A + 2C)</option>
              <option>Group (5+)</option>
            </select>
          </div>
        </div>

        <button className="bg-brand-black text-white h-[46px] w-full font-bold uppercase text-xs tracking-widest hover:bg-brand-accent transition-colors">
          Check Availability
        </button>
      </div>
    </div>
  );
};