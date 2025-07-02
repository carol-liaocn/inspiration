import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 判断文件是否为视频
  const isVideo = (imagePath) => {
    return imagePath.toLowerCase().endsWith('.mp4');
  };

  // 渲染媒体内容（图片或视频）
  const renderMedia = (src, alt, className = "w-full h-full object-cover") => {
    // 对路径进行URL编码处理，但保留斜杠
    const encodedPath = src.split('/').map(segment => encodeURIComponent(segment)).join('/');
    
    if (isVideo(src)) {
      return (
        <video
          src={encodedPath}
          autoPlay
          loop
          muted
          className={className}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.style.backgroundColor = '#D9D9D9';
          }}
        />
      );
    } else {
      return (
        <img
          src={encodedPath}
          alt={alt}
          className={className}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.style.backgroundColor = '#D9D9D9';
          }}
        />
      );
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

      <div className="bg-design-yellow max-w-6xl max-h-[80vh] w-full mx-16 overflow-hidden flex">
        {/* Left side - Image Gallery */}
        <div className="w-[70%] bg-design-yellow min-h-0" style={{ paddingLeft: '1.2%' }}>
          {/* Scrollable image grid */}
          <div className="h-full overflow-y-auto min-h-0 scrollbar-hide" style={{ paddingTop: '0', paddingRight: '1rem', paddingBottom: '1rem', paddingLeft: '0' }}>
            <div className="grid grid-cols-2 gap-4">
              {/* First image - spans two columns */}
              <div className="col-span-2 aspect-[3/2] bg-design-gray">
                {renderMedia(project.image, project.title)}
              </div>
              
              {/* Additional images in two columns */}
              <div className="aspect-square bg-design-gray">
                {renderMedia(`${project.image}?variant=2`, `${project.title} variant 2`)}
              </div>
              <div className="aspect-square bg-design-gray">
                {renderMedia(`${project.image}?variant=3`, `${project.title} variant 3`)}
              </div>
              
              {/* More placeholder images to demonstrate scrolling */}
              <div className="aspect-square bg-design-gray"></div>
              <div className="aspect-square bg-design-gray"></div>
              <div className="aspect-square bg-design-gray"></div>
              <div className="aspect-square bg-design-gray"></div>
              <div className="aspect-square bg-design-gray"></div>
              <div className="aspect-square bg-design-gray"></div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-[30%] bg-design-yellow text-dark-bg flex flex-col min-h-0" style={{ paddingTop: '2rem', paddingBottom: '2rem', paddingRight: '1.2%', paddingLeft: '0' }}>

          <div style={{ marginBottom: '1.5rem' }}>
            <h2 className="font-bold uppercase" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.2' }}>{project.title}</h2>
            <p className="font-medium" style={{ fontSize: '1.125rem', lineHeight: '1.3' }}>by {project.author}</p>
          </div>

          <div className="flex-1 overflow-y-auto min-h-0" style={{ marginBottom: '1.5rem' }}>
            <p className="whitespace-pre-line font-medium text-justify" style={{ fontSize: '1.125rem', lineHeight: '1.625' }}>
              {project.description}
            </p>
          </div>

          <div className="text-left">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-bg font-medium underline hover:no-underline"
              style={{ fontSize: '0.875rem' }}
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