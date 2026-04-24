import LazyBg from '../components/LazyBg';
import DynamicGallery from '../components/DynamicLibrary';
import CommissionBox from '../components/CommissionBox';
import GlobalLayout from '../components/GlobalLayout';
import { motion } from 'framer-motion';

export default function PersonalPage() {
  return (
    <GlobalLayout title="Creative Playground" description="Explore my art, games, and personal journal.">
      <div className="personal-page">
        {/* 🎉 Hero Section */}
        <div className="hero-container overflow-hidden position-relative" style={{ 
          height: '70vh',
          background: 'linear-gradient(135deg, #4c1d95, #1e3a8a, #7c2d12)' 
        }}>
          <LazyBg
            src="/vibrant-bg.png"
            style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center z-2"
            >
              <h1 style={{ 
                fontSize: '5rem', 
                color: 'white', 
                textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                fontFamily: 'Lilita One, sans-serif'
              }}>
                Creative Playground
              </h1>
              <p className="lead text-white-50 mt-3 font-heading" style={{ letterSpacing: '0.2em' }}>
                ART • GAMING • JOURNAL
              </p>
            </motion.div>
          </LazyBg>
          <div className="position-absolute bottom-0 start-0 w-100 p-5" style={{ background: 'linear-gradient(transparent, var(--bg-dark))' }} />
        </div>

        <div className="container py-5">
          {/* 🎨 Art Gallery */}
          <section className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="m-0" style={{ color: 'var(--accent)', fontSize: '3rem' }}>Art Gallery</h2>
              <div className="flex-grow-1 h-px bg-surface-border" style={{ height: '1px' }} />
            </div>
            <div className="glass-card p-4">
              <DynamicGallery folderName="portfolio_art" />
            </div>
          </section>

          {/* ✍️ Commission / Contact */}
          <section className="mb-5 row">
            <div className="col-md-7">
              <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="m-0" style={{ color: '#ee854a', fontSize: '2.5rem' }}>Commissions</h2>
              </div>
              <div className="glass-card p-5">
                <CommissionBox />
              </div>
            </div>
            
            {/* 🧩 Games / Journal Links */}
            <div className="col-md-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="m-0" style={{ color: '#6c9f71', fontSize: '2.5rem' }}>Journal</h2>
              </div>
              <div className="glass-card p-5 h-100 d-flex flex-column justify-content-center text-center">
                <p className="text-secondary fs-5">
                  Chronicles of my latest game sessions and personal journal updates.
                </p>
                <div className="mt-4 p-3 border border-dashed rounded text-muted">
                  Coming Soon
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .h-px { background-color: rgba(255,255,255,0.1); }
      `}</style>
    </GlobalLayout>
  );
}
