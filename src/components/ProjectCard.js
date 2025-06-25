import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, description, image, repoUrl, liveUrl, tags }) {

  const tagColors = {
    "React.js": "#61DBFB",          // React cyan :contentReference[oaicite:2]{index=2}
    "Next.js": "#000000",
    "PHP": "#777bb4",
    "ASP.NET": "#512bd4",
    "CodeIgniter 3": "#dd4814",
    "Firebase": "#FFCA28",
    "Firestore": "#FFCA28",
    "Bootstrap": "#7952b3",
    "jQuery": "#0769ad",
    "PayPal API": "#09368E",
    // Add more as needed...
  };
  
  return (
    <div className='col-md-4 mb-4'>
      <div className="card h-100 shadow-sm">
        {image && (
          <img
            src={image}
            alt={title}
            className="card-img-top"
            style={{ objectFit: 'cover', height: '200px' }}
          />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          {tags.length > 0 && (
          <div className="mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="badge rounded-pill text-light me-1"
                style={{ textShadow: "1px 1px 5px black", backgroundColor: tagColors[tag] || '#6c757d' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
          <div className="mt-3 d-flex gap-2">
            {repoUrl && (
              <a
                href={repoUrl}
                className="btn btn-outline-dark btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="me-1" /> GitHub
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="me-1" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
