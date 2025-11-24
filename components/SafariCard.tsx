import React, { useState } from 'react';
import { SafariItinerary } from '../types';
import { Clock, X } from 'lucide-react';
import { Button } from './ui/Button';

interface SafariCardProps {
  safari: SafariItinerary;
}

export const SafariCard: React.FC<SafariCardProps> = ({ safari }) => {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <div className="bg-brand-light/30 border border-brand-light overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-full overflow-hidden">
          <img
            src={safari.image}
            alt={safari.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-brand-black/90 text-white px-6 py-2">
            <div className="flex items-center space-x-2 text-sm font-bold tracking-widest uppercase">
              <Clock size={16} className="text-brand-accent" />
              <span>{safari.duration}</span>
            </div>
          </div>
        </div>
        
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="font-serif text-3xl font-bold text-brand-black mb-4">
            {safari.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {safari.description}
          </p>
          
          <div className="space-y-2 mb-8">
            {safari.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-sm text-brand-black/80">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" onClick={() => setShowTimeline(true)}>
              View Itinerary
            </Button>
            <Button variant="outline">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>

      {/* Timeline Modal / Expandable Area */}
      {showTimeline && (
        <div className="bg-white p-8 border-t border-brand-black/10 relative">
          <button 
            onClick={() => setShowTimeline(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-brand-black"
          >
            <X size={24} />
          </button>
          
          <h4 className="font-serif text-xl font-bold mb-6 text-brand-black">Day by Day</h4>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {safari.timeline.map((day, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                 {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-brand-accent text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="font-bold text-xs">{day.day}</span>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-brand-light">
                  <div className="font-bold text-brand-black mb-1">{day.title}</div>
                  <div className="text-xs text-gray-600">{day.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};