import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { BookingWidget } from '../components/BookingWidget';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Navbar />
      
      {/* Hero Section with 3D Architectural Visualization Video */}
      <div className="relative h-screen w-full overflow-hidden bg-brand-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          {/* Using a high-quality Mixkit video that looks like a 3D architectural flythrough */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-interior-animation-4265-large.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-accent"></div>
                <h2 className="text-brand-accent uppercase tracking-[0.3em] text-sm md:text-base font-bold">
                  Visionary Living
                </h2>
                <div className="h-[1px] w-12 bg-brand-accent"></div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium mb-6 leading-tight drop-shadow-2xl">
              Future of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Luxury</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6}>
            <p className="text-gray-200 max-w-lg mx-auto mb-10 text-lg font-light tracking-wide">
              Architectural masterpieces in Mt. Kenya & Nairobi. Experience the intersection of design, nature, and comfort.
            </p>
          </Reveal>
          <Reveal delay={0.8}>
             <div className="flex gap-4">
               <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-black">
                  Explore Concepts
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="primary">
                  Join The Club
                </Button>
              </Link>
             </div>
          </Reveal>
        </div>
      </div>

      <BookingWidget />

      {/* About / Brand Story Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative group">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-accent z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src="https://picsum.photos/seed/safari_couple/800/1000" 
                alt="Couple on Safari" 
                className="relative z-10 w-full h-auto object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Reveal>
          <div>
            <Reveal delay={0.2}>
              <h3 className="text-brand-accent uppercase tracking-widest text-sm font-bold mb-4">The New Standard</h3>
            </Reveal>
            <Reveal delay={0.3}>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-8 leading-tight">
                Design-Led <br/>Hospitality
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                New Manyatta Kenya redefines the safari and stay experience. We combine 3D-visualized architectural concepts with the raw reality of the Kenyan landscape.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From sleek urban apartments in Nairobi to stone-and-glass villas perched on Mount Kenya, our portfolio is curated for the modern aesthete.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <Link to="/about" className="group inline-flex items-center text-brand-black font-bold uppercase tracking-widest text-sm hover:text-brand-accent transition-colors">
                Read Our Philosophy <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Categories Parallax Snippet */}
      <section className="py-24 bg-brand-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Curated Collections</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/mt-kenya-homes" className="group relative h-[500px] overflow-hidden border border-gray-800 hover:border-brand-accent transition-colors">
              <img src="https://picsum.photos/seed/mtkenya/600/800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">01</span>
                <h3 className="font-serif text-3xl mb-2">Mt. Kenya Homes</h3>
                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  Architectural villas with panoramic peak views.
                </p>
              </div>
            </Link>
             <Link to="/safaris" className="group relative h-[500px] overflow-hidden border border-gray-800 hover:border-brand-accent transition-colors">
              <img src="https://picsum.photos/seed/lion/600/800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">02</span>
                <h3 className="font-serif text-3xl mb-2">Signature Safaris</h3>
                 <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  Private game drives and luxury tented camps.
                </p>
              </div>
            </Link>
             <Link to="/apartments" className="group relative h-[500px] overflow-hidden border border-gray-800 hover:border-brand-accent transition-colors">
              <img src="https://picsum.photos/seed/apartment/600/800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">03</span>
                <h3 className="font-serif text-3xl mb-2">Nairobi Living</h3>
                 <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  High-end apartments in the city's pulse.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <Star className="text-brand-accent mx-auto mb-8 w-10 h-10 fill-current" />
            <Reveal>
              <h3 className="font-serif text-3xl md:text-4xl italic text-brand-black mb-10 leading-snug">
                "An unforgettable escape. The visualization of the space before arrival was matched only by the reality of the experience."
              </h3>
            </Reveal>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px w-8 bg-brand-black"></div>
              <p className="font-bold text-sm uppercase tracking-widest text-brand-black">Sarah J., London</p>
              <div className="h-px w-8 bg-brand-black"></div>
            </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};