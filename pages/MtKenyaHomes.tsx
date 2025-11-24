import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PropertyCard } from '../components/PropertyCard';
import { PROPERTIES } from '../constants';
import { PropertyType } from '../types';
import { Reveal } from '../components/ui/Reveal';

export const MtKenyaHomes: React.FC = () => {
  const villas = PROPERTIES.filter(p => p.type === PropertyType.VILLA);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      <div className="relative h-[60vh] bg-brand-black overflow-hidden">
        <img src="https://picsum.photos/seed/mountain/1920/1080" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-6">
                <Reveal>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Mountain Sanctuaries</h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-xl text-gray-200 font-light">
                        Exclusive private villas on the slopes of Mt. Kenya. Breathe the fresh highland air.
                    </p>
                </Reveal>
            </div>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-12 flex justify-between items-end">
              <div>
                  <h2 className="font-serif text-3xl text-brand-black">Available Villas</h2>
                  <p className="text-gray-500 mt-2">Curated for privacy, luxury, and views.</p>
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {villas.map(villa => (
                  <Reveal key={villa.id} width="100%">
                      <PropertyCard property={villa} />
                  </Reveal>
              ))}
          </div>
      </section>

      {/* Activities Section */}
      <section className="bg-brand-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-3xl mb-12 text-center">Highland Activities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                      <div className="w-full h-48 bg-gray-800 mb-4 overflow-hidden">
                           <img src="https://picsum.photos/seed/hike/400/300" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="font-bold uppercase tracking-widest text-sm">Guided Hikes</h4>
                  </div>
                   <div className="text-center">
                      <div className="w-full h-48 bg-gray-800 mb-4 overflow-hidden">
                           <img src="https://picsum.photos/seed/fire/400/300" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="font-bold uppercase tracking-widest text-sm">Bonfire Nights</h4>
                  </div>
                   <div className="text-center">
                      <div className="w-full h-48 bg-gray-800 mb-4 overflow-hidden">
                           <img src="https://picsum.photos/seed/chef/400/300" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="font-bold uppercase tracking-widest text-sm">Private Dining</h4>
                  </div>
                   <div className="text-center">
                      <div className="w-full h-48 bg-gray-800 mb-4 overflow-hidden">
                           <img src="https://picsum.photos/seed/yoga/400/300" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="font-bold uppercase tracking-widest text-sm">Wellness</h4>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};