import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom'; // If react-router is not present, we fallback to manual navigation

/**
 * Admin login page.
 * Uses Supabase client to sign in with email/password.
 * On success, redirects to /admin/dashboard.
 */
export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (authError) {
      setError(authError.message);
      return;
    }
    // Successfully signed in – navigate to dashboard
    // If react-router is available use it, otherwise manipulate history directly
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/admin/dashboard');
      const popEvent = new PopStateEvent('popstate');
      window.dispatchEvent(popEvent);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold">Admin Login</h2>
        {error && <p className="mb-2 text-center text-sm text-red-600">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
