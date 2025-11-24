import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ui/Reveal';
import { Target, Heart, Map } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      {/* Header */}
      <section className="relative py-24 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Philosophy</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl max-w-2xl mx-auto text-gray-300 font-light">
              Crafting spaces and journeys that honor the Kenyan spirit while defining a new standard of luxury.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-brand-black" size={32} />
                </div>
                <h3 className="font-serif text-2xl text-brand-black mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                    To connect the world with the authentic beauty of Kenya through sustainable, high-end hospitality and curated adventure.
                </p>
            </div>
            <div className="text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="text-brand-black" size={32} />
                </div>
                <h3 className="font-serif text-2xl text-brand-black mb-4">Why Choose Us</h3>
                <p className="text-gray-600 leading-relaxed">
                    We don't just offer beds; we offer experiences. From personal chefs to private guides, every detail is bespoke.
                </p>
            </div>
             <div className="text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Map className="text-brand-black" size={32} />
                </div>
                <h3 className="font-serif text-2xl text-brand-black mb-4">Location</h3>
                <p className="text-gray-600 leading-relaxed">
                    Strategically selected properties offering the best views of Mt. Kenya and the most convenient access to Nairobi's hubs.
                </p>
            </div>
        </div>
      </section>

      {/* Timeline / Story */}
      <section className="py-20 bg-brand-light/50">
         <div className="max-w-4xl mx-auto px-6">
             <div className="text-center mb-12">
                 <h2 className="font-serif text-3xl text-brand-black">Our Journey</h2>
             </div>
             <div className="space-y-8 border-l-2 border-brand-accent/30 pl-8 ml-4">
                 <div className="relative">
                     <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-brand-accent border-4 border-white"></span>
                     <h4 className="font-bold text-brand-black uppercase tracking-widest text-sm mb-1">2018</h4>
                     <p className="text-gray-600">New Manyatta is founded with a single villa on the slopes of Mt. Kenya.</p>
                 </div>
                 <div className="relative">
                     <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-brand-accent border-4 border-white"></span>
                     <h4 className="font-bold text-brand-black uppercase tracking-widest text-sm mb-1">2020</h4>
                     <p className="text-gray-600">Expansion into Nairobi with a focus on business luxury apartments.</p>
                 </div>
                 <div className="relative">
                     <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-brand-accent border-4 border-white"></span>
                     <h4 className="font-bold text-brand-black uppercase tracking-widest text-sm mb-1">2023</h4>
                     <p className="text-gray-600">Launch of the Safari division, offering end-to-end luxury itineraries.</p>
                 </div>
             </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};