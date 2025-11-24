import React from 'react';
import { Property } from '../types';
import { MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white h-full flex flex-col shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 rounded-sm overflow-hidden border border-transparent hover:border-gray-100">
      
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {/* Price Tag */}
        <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm text-brand-black px-4 py-2 shadow-lg">
          <span className="text-xs font-bold uppercase tracking-widest">{property.price}</span>
        </div>
        {/* Type Badge */}
        <div className="absolute bottom-4 left-4 z-20 bg-brand-accent/90 text-white px-3 py-1">
          <span className="text-[10px] font-bold uppercase tracking-widest">{property.type}</span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="flex items-center space-x-2 mb-4">
          <MapPin size={14} className="text-brand-accent shrink-0" />
          <span className="text-xs text-gray-500 uppercase tracking-wider truncate font-medium">{property.location}</span>
        </div>
        
        <h3 className="font-serif text-2xl lg:text-3xl text-brand-black mb-4 group-hover:text-brand-accent transition-colors leading-tight">
          {property.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-7 mb-6 line-clamp-3 font-light">
          {property.description}
        </p>

        {/* Highlights Section */}
        <div className="mb-8 space-y-2 border-l-2 border-gray-100 pl-4">
          {property.highlights.slice(0, 3).map((highlight, idx) => (
             <div key={idx} className="flex items-start text-xs text-gray-700">
               <span className="font-semibold text-brand-black mr-2">/</span>
               <span>{highlight}</span>
             </div>
          ))}
        </div>
        
        <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
           {property.galleryLink ? (
             <a 
               href={property.galleryLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-accent transition-colors"
             >
               View Gallery <ExternalLink size={12} className="ml-1.5" />
             </a>
           ) : (
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Details Available</span>
           )}
           
           <button className="group/btn bg-brand-black text-white pl-6 pr-4 py-3 text-xs uppercase font-bold tracking-widest hover:bg-brand-accent transition-all flex items-center">
             Reserve <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
};