import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Calendar } from 'lucide-react';

export const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col pt-20 bg-brand-light">
      <Navbar />
      <div className="max-w-4xl mx-auto w-full px-6 py-12 flex-grow">
        <div className="flex items-center space-x-4 mb-8">
            <div className="p-4 bg-brand-accent/10 rounded-full">
                <User size={32} className="text-brand-accent" />
            </div>
            <div>
                <h1 className="font-serif text-4xl text-brand-black">My Account</h1>
                <p className="text-gray-500 text-sm">Manage your profile and bookings</p>
            </div>
        </div>
        
        {user && (
          <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-sm">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                 <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-1">Email Address</h3>
                    <p className="text-brand-black text-lg">{user.email}</p>
                 </div>
                 <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                     Active Member
                 </div>
            </div>

            <div className="border-t border-gray-100 my-8 pt-8">
               <div className="flex items-center gap-2 mb-6">
                 <Calendar size={20} className="text-brand-black" />
                 <h3 className="font-serif text-2xl">My Bookings</h3>
               </div>
               
               <div className="bg-gray-50 p-12 text-center border border-dashed border-gray-300 rounded-sm">
                   <p className="text-gray-500 italic mb-6">You have no active bookings.</p>
                   <Button variant="primary" onClick={() => navigate('/')}>Explore Properties</Button>
               </div>
            </div>
            
            <div className="flex justify-end pt-4 border-t border-gray-100 mt-8">
                <Button variant="outline" onClick={handleLogout} className="flex items-center space-x-2">
                    <LogOut size={16} />
                    <span>Sign Out</span>
                </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
