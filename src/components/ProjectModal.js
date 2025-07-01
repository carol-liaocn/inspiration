import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-dark-bg bg-opacity-80 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-design-yellow max-w-6xl w-full mx-16 rounded-xl overflow-hidden flex">
        {/* Left side - Image Gallery */}
        <div className="w-1/2 p-12 bg-design-yellow">
          {/* Main large image */}
          <div className="aspect-[3/2] bg-design-gray rounded-xl mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.style.backgroundColor = '#D9D9D9';
              }}
            />
          </div>
          
          {/* Two smaller images below */}
          <div className="flex space-x-4">
            <div className="w-1/2 aspect-square bg-design-gray rounded-xl">
              <img
                src={`${project.image}?variant=2`}
                alt={`${project.title} variant 2`}
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.backgroundColor = '#D9D9D9';
                }}
              />
            </div>
            <div className="w-1/2 aspect-square bg-design-gray rounded-xl">
              <img
                src={`${project.image}?variant=3`}
                alt={`${project.title} variant 3`}
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.backgroundColor = '#D9D9D9';
                }}
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-1/2 p-12 bg-design-yellow text-dark-bg relative">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-16 h-16 bg-design-yellow border-2 border-dark-bg rounded flex items-center justify-center hover:bg-opacity-80 transition-all"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="mb-12">
            <h2 className="text-6xl font-bold mb-4 uppercase">openai — devday</h2>
            <p className="text-3xl font-medium">by {project.author}</p>
          </div>

          <div className="mb-12">
            <p className="text-3xl leading-relaxed whitespace-pre-line font-medium">
              {project.description}
            </p>
          </div>

          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-bg text-3xl font-medium underline hover:no-underline"
          >
            {project.link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 