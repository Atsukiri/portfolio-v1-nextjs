import Head from 'next/head';
import Layout from '@/components/PersonalLayout';

export default function PersonalPlaceholder() {
  return (
    <Layout>
      <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '80vh' }}>
        <h1 className="display-4 mb-3">Personal Portfolio</h1>
        <p className="lead mb-4">This section is under development. Stay tuned!</p>
      </div>
    </Layout>
  );
}