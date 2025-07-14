// import Head from 'next/head';
// import Layout from '@/components/PersonalLayout';

// export default function PersonalPlaceholder() {
//   return (
//     <Layout>
//       <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '80vh' }}>
//         <h1 className="display-4 mb-3">Personal Portfolio</h1>
//         <p className="lead mb-4">This section is under development. Stay tuned!</p>
//       </div>
//     </Layout>
//   );
// }

export const metadata = {
  title: 'Creative Playground — Art, Gaming & Journal | Milan A.',
  description: 'Discover my art, games, and personal journal. Curious? Leave a note or request a commission!',
};

import LazyBg from '../components/LazyBg';
import DynamicGallery from '../components/DynamicLibrary';
import CommissionBox from '../components/CommissionBox';

export default function PersonalPage() {
  return (
    <div>
      {/* 🎉 Hero Section */}
      <LazyBg
        src="/vibrant-bg.webp"
        style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <h1 style={{ color: 'white', fontSize: '3rem', textShadow: '2px 2px rgba(0,0,0,0.5)' }}>
          Creative Playground
        </h1>
      </LazyBg>

      <div className="container py-5">
        {/* 🎨 Art Gallery */}
        <section className="mb-5">
          <h2 style={{ color: '#ee6c4d' }}>Art Gallery</h2>
          <DynamicGallery albumId="ZXoRKF4" />
        </section>

        {/* ✍️ Commission / Contact */}
        <section className="mb-5">
          <h2 style={{ color: '#ee854a' }}>Commissions & Feedback</h2>
          <CommissionBox />
        </section>

        {/* 🧩 Games / Journal Links */}
        <section className="mb-5">
          <h2 style={{ color: '#6c9f71' }}>Games & Journal</h2>
          <p>
            Chronicles of my latest game sessions and personal journal updates. <em>(coming soon!)</em>
          </p>
        </section>
      </div>
    </div>
  );
}
