import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import clsx from 'clsx';

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted. See README for Supabase integration.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 md:px-6 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-[2px]"></div>
        
        <Reveal width="100%">
          <div className="relative z-10 w-full max-w-lg mx-auto bg-white shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-brand-black p-8 md:p-10 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                {isLogin ? 'Welcome Back' : 'Membership'}
              </h2>
              <p className="text-gray-400 text-sm tracking-wide font-light">
                {isLogin ? 'Sign in to manage your luxury escape' : 'Join New Manyatta for exclusive access'}
              </p>
            </div>

            {/* Form Body */}
            <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLogin && (
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-gray-300 py-3 text-brand-black focus:outline-none focus:border-brand-accent transition-colors placeholder-gray-300 text-lg font-serif"
                        placeholder="e.g. Jonathan Doe"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-brand-black focus:outline-none focus:border-brand-accent transition-colors placeholder-gray-300 text-lg font-serif"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">Password</label>
                        {isLogin && <a href="#" className="text-[10px] text-gray-400 hover:text-brand-accent transition-colors">Forgot?</a>}
                    </div>
                    <input 
                      type="password" 
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-brand-black focus:outline-none focus:border-brand-accent transition-colors placeholder-gray-300 text-lg font-serif"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="pt-4">
                      <Button type="submit" className="w-full shadow-lg" size="lg">
                        {isLogin ? 'Sign In' : 'Create Account'}
                      </Button>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-600 font-light">
                    {isLogin ? "Not a member yet?" : "Already a member?"}
                    <button 
                      onClick={() => setIsLogin(!isLogin)}
                      className="font-bold text-brand-accent hover:text-brand-black transition-colors uppercase text-xs tracking-widest ml-2 border-b border-brand-accent pb-0.5"
                    >
                      {isLogin ? 'Request Access' : 'Sign In'}
                    </button>
                  </p>
                </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
};