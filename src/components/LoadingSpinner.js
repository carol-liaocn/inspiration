import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  text = '加载中...', 
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-dark-bg bg-opacity-90 z-50'
    : 'flex items-center justify-center';

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className={`${sizeClasses[size]} relative`}>
          <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
          <div className={`absolute inset-0 border-4 border-transparent border-t-design-yellow rounded-full animate-spin`}></div>
        </div>
        
        {/* Loading Text */}
        {text && (
          <div className="text-center">
            <p className={`${textSizeClasses[size]} text-light-gray font-medium`}>
              {text}
            </p>
            <div className="flex space-x-1 mt-2 justify-center">
              <div className="w-2 h-2 bg-design-yellow rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-design-yellow rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-design-yellow rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner; 