import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Loader } from 'lucide-react';

export const AuthGuard: React.FC = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes (sign in, sign out, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-brand-light">
        <Loader className="animate-spin text-brand-accent" size={32} />
      </div>
    );
  }

  // If no session, redirect to login but save the current location they were trying to visit
  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If session exists, render the child route
  return <Outlet />;
};
