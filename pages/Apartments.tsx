import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PropertyCard } from '../components/PropertyCard';
import { PROPERTIES } from '../constants';
import { PropertyType } from '../types';
import { Reveal } from '../components/ui/Reveal';
import { Car, Coffee, Shield } from 'lucide-react';

export const Apartments: React.FC = () => {
  const apartments = PROPERTIES.filter(p => p.type === PropertyType.APARTMENT);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />

       <div className="relative h-[50vh] bg-brand-black overflow-hidden">
        <img src="https://picsum.photos/seed/city/1920/1080" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-6">
                <Reveal>
                    <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Urban Luxury</h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-xl text-gray-200 font-light">
                        Premium serviced apartments in Nairobi's most exclusive neighborhoods.
                    </p>
                </Reveal>
            </div>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {apartments.map(apt => (
                  <Reveal key={apt.id} width="100%">
                      <PropertyCard property={apt} />
                  </Reveal>
              ))}
          </div>
      </section>

      {/* Services Grid */}
       <section className="bg-brand-light/50 py-20">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-3xl mb-12 text-center text-brand-black">Concierge Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm">
                      <Car size={40} className="text-brand-accent mb-4" />
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Chauffeur</h4>
                      <p className="text-sm text-gray-500">Professional drivers available for airport transfers and daily commute.</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm">
                      <Shield size={40} className="text-brand-accent mb-4" />
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-2">24/7 Security</h4>
                      <p className="text-sm text-gray-500">Manned gates, CCTV, and secure access control for peace of mind.</p>
                  </div>
                   <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm">
                      <Coffee size={40} className="text-brand-accent mb-4" />
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Housekeeping</h4>
                      <p className="text-sm text-gray-500">Daily cleaning, laundry services, and grocery stocking upon request.</p>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};