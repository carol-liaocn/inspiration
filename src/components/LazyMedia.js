import React, { useState, useRef, useEffect } from 'react';

const LazyMedia = ({ 
  src, 
  alt, 
  className = "w-full h-full object-cover",
  type = 'auto',
  placeholder = null,
  onLoad = () => {},
  onError = () => {},
  threshold = 0.1
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const mediaRef = useRef(null);
  const observerRef = useRef(null);

  // 判断文件是否为视频
  const isVideo = (filePath) => {
    if (type === 'video') return true;
    if (type === 'image') return false;
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
    return videoExtensions.some(ext => filePath.toLowerCase().endsWith(ext));
  };

  // 设置Intersection Observer
  useEffect(() => {
    const target = mediaRef.current;
    if (!target) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          setIsLoading(true);
        }
      },
      {
        threshold,
        rootMargin: '50px' // 提前50px开始加载
      }
    );

    observerRef.current.observe(target);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isInView, threshold]);

  // 处理媒体加载完成
  const handleLoad = () => {
    setIsLoaded(true);
    setIsLoading(false);
    onLoad();
  };

  // 处理媒体加载错误
  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError();
  };

  // 渲染占位符
  const renderPlaceholder = () => {
    if (placeholder) {
      return placeholder;
    }
    
    return (
      <div className={`${className} bg-gray-800 flex items-center justify-center`}>
        {isLoading ? (
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 border-2 border-gray-600 border-t-gray-400 rounded-full animate-spin"></div>
            <span className="text-xs text-gray-400">加载中...</span>
          </div>
        ) : hasError ? (
          <div className="flex flex-col items-center space-y-2">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-gray-500">加载失败</span>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
          </div>
        )}
      </div>
    );
  };

  // 渲染媒体内容
  const renderMedia = () => {
    if (!isInView) return null;

    if (isVideo(src)) {
      return (
        <video
          src={src}
          autoPlay
          loop
          muted
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoadedData={handleLoad}
          onError={handleError}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      );
    } else {
      return (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      );
    }
  };

  return (
    <div ref={mediaRef} className={`relative ${className}`}>
      {/* 始终显示占位符，媒体加载后淡入覆盖 */}
      {!isLoaded && renderPlaceholder()}
      {/* 媒体内容 */}
      {isInView && renderMedia()}
    </div>
  );
};

export default LazyMedia; 