import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SafariCard } from '../components/SafariCard';
import { SAFARIS } from '../constants';
import { Reveal } from '../components/ui/Reveal';

export const Safaris: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />

       <div className="relative h-[60vh] bg-brand-black overflow-hidden">
        <img src="https://picsum.photos/seed/safari_jeep/1920/1080" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-6">
                <Reveal>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Into The Wild</h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-xl text-gray-200 font-light">
                        Bespoke itineraries designed for the modern explorer. Witness nature's greatest spectacles in privacy and comfort.
                    </p>
                </Reveal>
            </div>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="font-serif text-3xl text-brand-black mb-6">Our Safari Philosophy</h2>
              <p className="text-gray-600 leading-relaxed">
                  We believe a safari should be transformative. It is not just about checking animals off a list, but about understanding the ecosystem, the culture, and the silence of the savannah. Our guides are experts, our camps are exclusive, and our timing is impeccable.
              </p>
          </div>

          <div className="space-y-24">
              {SAFARIS.map((safari) => (
                  <Reveal key={safari.id} width="100%">
                      <SafariCard safari={safari} />
                  </Reveal>
              ))}
          </div>
      </section>

      <Footer />
    </div>
  );
};