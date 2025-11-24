import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { COFFEE_PRODUCTS } from '../constants';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export const Others: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      {/* Coffee Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                 <div className="md:w-1/2">
                    <Reveal>
                        <h2 className="text-brand-accent uppercase tracking-widest text-sm font-bold mb-4">Our Products</h2>
                        <h1 className="font-serif text-4xl text-brand-black mb-6">Mt. Elgon Reserve Coffee</h1>
                        <p className="text-gray-600 mb-6">
                            Sourced directly from the volcanic soils of Mount Elgon. Our coffee is ethically farmed, hand-picked, and roasted to perfection. A rich, full-bodied experience in every cup.
                        </p>
                        <Button>Shop Coffee</Button>
                    </Reveal>
                 </div>
                 <div className="md:w-1/2 grid grid-cols-2 gap-6">
                     {COFFEE_PRODUCTS.map(product => (
                         <div key={product.id} className="group">
                             <div className="bg-gray-100 mb-4 p-8 flex items-center justify-center">
                                 <img src={product.image} alt={product.name} className="w-full h-auto mix-blend-multiply group-hover:scale-110 transition-transform" />
                             </div>
                             <h4 className="font-serif text-xl text-brand-black">{product.name}</h4>
                             <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.roast}</p>
                             <p className="font-bold text-brand-accent">{product.price}</p>
                         </div>
                     ))}
                 </div>
             </div>
        </div>
      </section>

      {/* Honey Placeholder */}
      <section className="py-20 bg-brand-light/50">
          <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="font-serif text-3xl text-brand-black mb-4">Coming Soon: Organic Honey</h2>
              <p className="text-gray-600">Pure, raw honey harvested from the acacia forests of the Rift Valley.</p>
          </div>
      </section>

      {/* CSR / Blog */}
      <section className="py-24 max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-brand-black mb-12 text-center">Community & Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                      <img src="https://picsum.photos/seed/school/600/400" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                      <div className="text-xs text-brand-accent uppercase font-bold mb-2">CSR Project</div>
                      <h3 className="font-serif text-xl mb-3 group-hover:text-brand-black/70 transition-colors">Supporting Local Schools</h3>
                      <p className="text-gray-600 text-sm mb-4">How we contribute to education in the Nanyuki region.</p>
                      <a href="#" className="text-sm font-bold text-brand-black underline decoration-brand-accent">Read More</a>
                  </div>
              </div>
              <div className="bg-white shadow-md overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                      <img src="https://picsum.photos/seed/elephants/600/400" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                   <div className="p-6">
                      <div className="text-xs text-brand-accent uppercase font-bold mb-2">Conservation</div>
                      <h3 className="font-serif text-xl mb-3 group-hover:text-brand-black/70 transition-colors">The Elephant Corridors</h3>
                      <p className="text-gray-600 text-sm mb-4">Understanding the migration paths around our properties.</p>
                      <a href="#" className="text-sm font-bold text-brand-black underline decoration-brand-accent">Read More</a>
                  </div>
              </div>
               <div className="bg-white shadow-md overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                      <img src="https://picsum.photos/seed/art/600/400" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                   <div className="p-6">
                      <div className="text-xs text-brand-accent uppercase font-bold mb-2">Culture</div>
                      <h3 className="font-serif text-xl mb-3 group-hover:text-brand-black/70 transition-colors">Local Artistry</h3>
                      <p className="text-gray-600 text-sm mb-4">Spotlighting the craftsmen behind our villa interiors.</p>
                      <a href="#" className="text-sm font-bold text-brand-black underline decoration-brand-accent">Read More</a>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};