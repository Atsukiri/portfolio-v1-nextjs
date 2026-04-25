import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="admin-layout min-vh-100 bg-dark text-white">
      <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-secondary sticky-top bg-dark">
        <div className="container">
          <Link href="/admin" className="navbar-brand fw-bold font-heading">
            Admin <span className="text-primary">Dashboard</span>
          </Link>
          <div className="d-flex gap-3 align-items-center">
            <Link href="/" className="text-secondary text-decoration-none hover:text-white">
              View Site
            </Link>
            <button 
              onClick={handleLogout}
              className="btn btn-outline-danger btn-sm rounded-pill"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      <style jsx>{`
        .admin-layout {
          background-color: #030712 !important;
        }
        .navbar {
          backdrop-filter: blur(10px);
          background-color: rgba(3, 7, 18, 0.8) !important;
        }
      `}</style>
    </div>
  );
}
