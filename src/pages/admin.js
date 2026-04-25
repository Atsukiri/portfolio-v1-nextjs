import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { CldUploadWidget } from 'next-cloudinary';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('gallery');
  
  // Blog State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogSuccess, setBlogSuccess] = useState(false);

  const handlePostBlog = async (e) => {
    e.preventDefault();
    setBlogLoading(true);
    setBlogSuccess(false);

    try {
      await addDoc(collection(db, 'journal_posts'), {
        title,
        content,
        createdAt: serverTimestamp(),
      });
      setTitle('');
      setContent('');
      setBlogSuccess(true);
      setTimeout(() => setBlogSuccess(false), 3000);
    } catch (err) {
      console.error('Error adding document: ', err);
      alert('Failed to post entry.');
    } finally {
      setBlogLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="row mb-5">
        <div className="col-12">
          <ul className="nav nav-pills gap-2 p-1 bg-surface border border-secondary rounded-pill d-inline-flex">
            <li className="nav-item">
              <button 
                className={`nav-link rounded-pill px-4 ${activeTab === 'gallery' ? 'active bg-primary' : 'text-secondary'}`}
                onClick={() => setActiveTab('gallery')}
              >
                Gallery Manager
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link rounded-pill px-4 ${activeTab === 'blog' ? 'active bg-primary' : 'text-secondary'}`}
                onClick={() => setActiveTab('blog')}
              >
                Journal Entry
              </button>
            </li>
          </ul>
        </div>
      </div>

      {activeTab === 'gallery' ? (
        <div className="gallery-manager glass-card p-5 text-center">
          <h2 className="font-heading mb-3">Upload to Gallery</h2>
          <p className="text-secondary mb-5">Upload images directly to your Cloudinary storage. They will be automatically tagged for your portfolio.</p>
          
          <CldUploadWidget 
            uploadPreset="portfolio_uploads"
            onSuccess={(result) => {
              console.log('Upload success:', result);
              alert('Image uploaded successfully!');
            }}
            options={{
              tags: ['portfolio_art'],
              folder: 'portfolio_art'
            }}
          >
            {({ open }) => (
              <button 
                className="btn btn-primary btn-lg px-5 rounded-pill fw-bold"
                onClick={() => open()}
              >
                Open Upload Widget
              </button>
            )}
          </CldUploadWidget>

          <div className="mt-5 p-4 border border-secondary border-dashed rounded-lg">
            <p className="small text-muted mb-0">
              Note: Make sure you have created an <strong>unsigned upload preset</strong> named <code>portfolio_uploads</code> in your Cloudinary settings.
            </p>
          </div>
        </div>
      ) : (
        <div className="blog-manager glass-card p-5">
          <h2 className="font-heading mb-4">New Journal Entry</h2>
          <form onSubmit={handlePostBlog}>
            <div className="mb-4">
              <label className="form-label text-secondary small text-uppercase fw-bold">Post Title</label>
              <input 
                type="text" 
                className="form-control bg-dark text-white border-secondary"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What's on your mind?"
                required
                style={{ borderRadius: '0.75rem' }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label text-secondary small text-uppercase fw-bold">Content</label>
              <textarea 
                className="form-control bg-dark text-white border-secondary"
                rows="10"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your thoughts..."
                required
                style={{ borderRadius: '0.75rem' }}
              ></textarea>
            </div>

            {blogSuccess && (
              <div className="alert alert-success py-2 small mb-4 rounded-lg">
                Entry posted successfully!
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary px-5 py-2 fw-bold rounded-pill"
              disabled={blogLoading}
            >
              {blogLoading ? 'Posting...' : 'Publish Entry'}
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        .bg-surface {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .form-control:focus {
          background-color: #030712;
          border-color: var(--primary);
          box-shadow: 0 0 0 0.25rem var(--primary-glow);
          color: white;
        }
      `}</style>
    </AdminLayout>
  );
}