import Image from 'next/image';

export default function ProjectCard({ title, description, image, liveUrl, repoUrl, tags = [] }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        {image && (
          <Image src={image} width={500} height={250} className="card-img-top" alt={`${title} screenshot`} />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {tags.length > 0 && (
            <div className="mb-2">
              {tags.map(tag => (
                <span key={tag} className="badge bg-secondary me-1">{tag}</span>
              ))}
            </div>
          )}
          <div className="mt-auto">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary me-2">
                Live Demo
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
