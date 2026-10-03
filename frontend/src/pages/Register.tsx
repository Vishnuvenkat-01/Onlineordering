import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

export default function Register() {
  const { register, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message;
      setError(msg ?? 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-neutral-900 mb-1">Create Account</h1>
            <p className="text-neutral-500 text-sm">Join Beemans and order your favourites</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="reg-name" className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name</label>
              <input
                id="reg-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 bg-neutral-50"
                placeholder="Arun Kumar"
              />
            </div>
            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
              <input
                id="reg-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 bg-neutral-50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-neutral-700 mb-1.5">Password</label>
              <input
                id="reg-password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 bg-neutral-50"
                placeholder="Min. 8 characters"
              />
            </div>
            <div>
              <label htmlFor="reg-confirm" className="block text-sm font-medium text-neutral-700 mb-1.5">Confirm Password</label>
              <input
                id="reg-confirm"
                type="password"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 bg-neutral-50"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-700 border border-red-200 rounded-xl px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <button
              id="register-submit-btn"
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-semibold py-3.5 rounded-full shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] mt-2"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-neutral-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-red font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
