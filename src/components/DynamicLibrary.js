'use client';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function DynamicGallery({ folderName }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Note: To fetch a list of images client-side from Cloudinary, 
  // you usually use their 'list' API which requires a tag.
  // We'll assume the user will tag their images with 'portfolio_art'.
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Cloudinary JSON list API (requires 'Client-side resource listing' enabled in settings)
        // URL format: https://res.cloudinary.com/<cloud_name>/image/list/<tag>.json
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const tag = folderName || 'portfolio_art';
        
        const response = await fetch(`https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`);
        const data = await response.json();
        
        setImages(data.resources.map(res => ({
          id: res.public_id,
          version: res.version,
          format: res.format,
        })));
      } catch (err) {
        console.error('Cloudinary fetch error:', err);
        // Fallback or empty state
      } finally {
        setLoading(false);
      }
    };

    if (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
      fetchImages();
    }
  }, [folderName]);

  if (loading) return <div className="text-center py-5">Loading Gallery...</div>;

  return (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <motion.div
          key={img.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="gallery-item overflow-hidden rounded-lg cursor-pointer"
        >
          <CldImage
            width="600"
            height="400"
            src={img.id}
            alt="Gallery Image"
            sizes="(max-width: 768px) 100vw, 33vw"
            crop="fill"
            className="hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      ))}

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .gallery-item {
          aspect-ratio: 1 / 1;
          background: var(--surface);
          border: 1px solid var(--surface-border);
        }
      `}</style>
    </div>
  );
}
