import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import clsx from 'clsx';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navbar Logic:
  // Transparent only if on Home Page AND not scrolled.
  // Solid Black otherwise.
  const isHomePage = location.pathname === '/';
  const isSolid = !isHomePage || scrolled;

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
        isSolid 
          ? 'bg-brand-black/95 backdrop-blur-sm py-3 md:py-4 shadow-lg border-brand-accent/20' 
          : 'bg-transparent py-4 md:py-6 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center text-white">
        {/* Logo Placeholder */}
        <Link to="/" className="z-50 group shrink-0">
          <div className="relative">
             <img 
               src="https://placehold.co/200x60/transparent/FFFFFF/png?text=NEW+MANYATTA" 
               alt="New Manyatta Logo" 
               className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105" 
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                "text-xs xl:text-sm font-medium uppercase tracking-widest hover:text-brand-accent transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-brand-accent after:transition-all hover:after:w-full",
                location.pathname === item.path ? 'text-brand-accent after:w-full' : 'text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="h-6 w-px bg-white/20 mx-2"></div>
          
          <Link
            to="/login"
            className="flex items-center space-x-2 text-xs xl:text-sm font-medium uppercase tracking-widest hover:text-brand-accent transition-colors"
          >
            <User size={16} />
            <span>Sign In</span>
          </Link>

          <Link
            to="/#contact"
            className="border border-brand-accent text-brand-accent px-5 py-2 text-xs uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-white hover:text-brand-accent transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={clsx(
            'fixed inset-0 bg-brand-black flex flex-col justify-center items-center space-y-6 transition-all duration-500 ease-in-out lg:hidden z-40',
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          )}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                "text-2xl font-serif transition-colors",
                location.pathname === item.path ? "text-brand-accent" : "text-white hover:text-brand-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="h-px w-24 bg-gray-800 my-4"></div>
          <Link
            to="/login"
            className="text-lg font-serif text-white hover:text-brand-accent transition-colors flex items-center gap-2"
          >
            <User size={20} /> Login / Sign Up
          </Link>
          <Link
            to="/#contact"
            className="mt-4 bg-brand-accent text-white px-8 py-3 text-lg uppercase tracking-widest font-bold shadow-lg shadow-brand-accent/20"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};