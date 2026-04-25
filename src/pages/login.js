import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import GlobalLayout from '../components/GlobalLayout';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlobalLayout title="Admin Login">
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-dark px-3">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-5 w-100" 
          style={{ maxWidth: '400px' }}
        >
          <div className="text-center mb-4">
            <h1 className="font-heading mb-2">Welcome Back</h1>
            <p className="text-secondary">Please log in to manage your portfolio</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label text-secondary small text-uppercase fw-bold">Email Address</label>
              <input 
                type="email" 
                className="form-control bg-dark text-white border-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderRadius: '0.75rem' }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label text-secondary small text-uppercase fw-bold">Password</label>
              <input 
                type="password" 
                className="form-control bg-dark text-white border-secondary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderRadius: '0.75rem' }}
              />
            </div>

            {error && (
              <div className="alert alert-danger py-2 small mb-4 rounded-lg">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary w-100 py-2 fw-bold rounded-pill"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .form-control:focus {
          background-color: #030712;
          border-color: var(--primary);
          box-shadow: 0 0 0 0.25rem var(--primary-glow);
          color: white;
        }
      `}</style>
    </GlobalLayout>
  );
}