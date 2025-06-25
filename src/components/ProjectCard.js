import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, description, image, repoUrl, liveUrl }) {
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
