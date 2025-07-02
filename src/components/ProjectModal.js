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
      {/* Close button positioned outside the modal */}
      <button 
        onClick={onClose}
        className="fixed top-8 left-4 w-10 h-10 bg-design-yellow flex items-center justify-center z-60"
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#131313" strokeWidth="1">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div className="bg-design-yellow max-w-6xl w-full mx-16 overflow-hidden flex">
        {/* Left side - Image Gallery */}
        <div className="w-[70%] bg-design-yellow flex flex-col p-4" style={{ paddingLeft: '1.2%' }}>
          {/* Main large image */}
          <div className="aspect-[3/2] bg-design-gray mb-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.style.backgroundColor = '#D9D9D9';
              }}
            />
          </div>
          
          {/* Two smaller images below */}
          <div className="flex gap-4">
            <div className="w-1/2 aspect-square bg-design-gray">
              <img
                src={`${project.image}?variant=2`}
                alt={`${project.title} variant 2`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.backgroundColor = '#D9D9D9';
                }}
              />
            </div>
            <div className="w-1/2 aspect-square bg-design-gray">
              <img
                src={`${project.image}?variant=3`}
                alt={`${project.title} variant 3`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.backgroundColor = '#D9D9D9';
                }}
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-[30%] py-12 bg-design-yellow text-dark-bg relative flex flex-col" style={{ paddingRight: '1.2%' }}>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 uppercase">openai — devday</h2>
            <p className="text-2xl font-medium">by {project.author}</p>
          </div>

          <div className="flex-1">
            <p className="text-2xl leading-relaxed whitespace-pre-line font-medium text-justify">
              {project.description}
            </p>
          </div>

          <div className="absolute bottom-12 left-0 right-0 text-left" style={{ paddingRight: '1.2%' }}>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-bg text-sm font-medium underline hover:no-underline"
            >
              {project.link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 