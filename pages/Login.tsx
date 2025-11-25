import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { supabase } from '../lib/supabase';
import { Loader } from 'lucide-react';

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  // Get the page they came from, or default to home
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        // Redirect back to where they came from
        navigate(from, { replace: true });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });
        if (error) throw error;
        alert('Check your email for the confirmation link!');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 md:px-6 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-sm"></div>
        
        <Reveal width="100%">
          <div className="relative z-10 w-full max-w-md mx-auto bg-white shadow-2xl overflow-hidden rounded-sm">
            {/* Form Header */}
            <div className="bg-brand-black p-10 text-center border-b-4 border-brand-accent">
              <h2 className="font-serif text-3xl text-white mb-2 tracking-wide">
                {isLogin ? 'Member Login' : 'Join The Club'}
              </h2>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-light">
                {isLogin ? 'Access your private dashboard' : 'Begin your luxury journey'}
              </p>
            </div>

            {/* Form Body */}
            <div className="p-10 md:p-12">
                {error && (
                  <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 text-xs text-center">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {!isLogin && (
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-brand-accent transition-colors">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-300 py-2 text-brand-black focus:outline-none focus:border-brand-accent transition-colors placeholder-gray-300 text-base font-serif"
                        placeholder="e.g. Jonathan Doe"
                      />
                    </div>
                  )}
                  
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-brand-accent transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-brand-black focus:outline-none focus:border-brand-accent transition-colors placeholder-gray-300 text-base font-serif"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 group-focus-within:text-brand-accent transition-colors">Password</label>
                        {isLogin && <a href="#" className="text-[10px] text-gray-400 hover:text-brand-accent transition-colors uppercase tracking-wider">Forgot?</a>}
                    </div>
                    <input 
                      type="password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-brand-black focus:outline-none focus:border-brand-accent transition-colors placeholder-gray-300 text-base font-serif"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="pt-6">
                      <Button type="submit" className="w-full shadow-lg h-12 text-xs flex justify-center items-center gap-2" size="lg" disabled={loading}>
                        {loading ? <Loader className="animate-spin" size={16} /> : (isLogin ? 'Sign In' : 'Create Account')}
                      </Button>
                  </div>
                </form>

                <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-500 font-light">
                    {isLogin ? "Not a member yet?" : "Already a member?"}
                    <button 
                      onClick={() => setIsLogin(!isLogin)}
                      className="font-bold text-brand-black hover:text-brand-accent transition-colors uppercase text-[10px] tracking-widest ml-2 border-b border-transparent hover:border-brand-accent"
                    >
                      {isLogin ? 'Apply for Access' : 'Sign In'}
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
