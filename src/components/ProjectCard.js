import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function ProjectCard({ title, description, image, repoUrl, liveUrl, tags }) {

  const tagColors = {
    "React.js": "#61DBFB",
    "Next.js": "#ffffff",
    "PHP": "#777bb4",
    "ASP.NET": "#512bd4",
    "CodeIgniter 3": "#dd4814",
    "Firebase": "#FFCA28",
    "Firestore": "#FFCA28",
    "Bootstrap": "#7952b3",
    "jQuery": "#0769ad",
    "PayPal API": "#09368E",
  };
  
  return (
    <div className='col-md-4 mb-4'>
      <div className="glass-card h-100 d-flex flex-column overflow-hidden">
        {image && (
          <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="p-4 d-flex flex-column flex-grow-1">
          <h4 className="font-heading mb-3" style={{ color: 'var(--primary)' }}>{title}</h4>
          <div className="flex-grow-1 text-secondary mb-4">
            <ReactMarkdown 
              components={{
                p: ({ node, ...props }) => <p className="mb-0" style={{ fontSize: '0.925rem', lineHeight: '1.6' }} {...props} />
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
          
          {tags.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-sm"
                  style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: `${tagColors[tag] || '#6c757d'}20`,
                    color: tagColors[tag] || '#6c757d',
                    border: `1px solid ${tagColors[tag] || '#6c757d'}40`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="d-flex gap-3 mt-auto">
            {repoUrl && (
              <a
                href={repoUrl}
                className="text-white hover:text-primary transition-colors d-flex align-items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.875rem' }}
              >
                <FaGithub /> Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                className="text-white hover:text-primary transition-colors d-flex align-items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.875rem' }}
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
