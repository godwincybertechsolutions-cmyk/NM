import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-accent/20 pb-12">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">New Manyatta Kenya</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Curating exceptional African experiences through luxury homes, exclusive safaris, and authentic hospitality.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-lg text-brand-accent">Contact</h4>
          <div className="flex items-center space-x-3 text-sm text-gray-400">
            <Mail size={16} />
            <span>concierge@newmanyatta.co.ke</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-400">
            <Phone size={16} />
            <span>+254 700 000 000</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-400">
            <MapPin size={16} />
            <span>Westlands, Nairobi, Kenya</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-lg text-brand-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/mt-kenya-homes" className="hover:text-brand-accent transition-colors">Mt. Kenya Villas</a></li>
            <li><a href="/safaris" className="hover:text-brand-accent transition-colors">Safaris</a></li>
            <li><a href="/apartments" className="hover:text-brand-accent transition-colors">Nairobi Apartments</a></li>
            <li><a href="/about" className="hover:text-brand-accent transition-colors">Our Philosophy</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-lg text-brand-accent">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 border border-gray-700 rounded-full hover:border-brand-accent hover:text-brand-accent transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 border border-gray-700 rounded-full hover:border-brand-accent hover:text-brand-accent transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 border border-gray-700 rounded-full hover:border-brand-accent hover:text-brand-accent transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 text-xs text-gray-600 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} New Manyatta Kenya. All Rights Reserved.
      </div>
    </footer>
  );
};