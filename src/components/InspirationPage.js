import React, { useState, useMemo } from 'react';
import ProjectModal from './ProjectModal';
import LazyMedia from './LazyMedia';
import LoadingSpinner from './LoadingSpinner';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import inspirationData from '../data/inspiration_data.json';

const InspirationPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // 处理标签字符串，转换为数组
  const processedProjects = useMemo(() => 
    inspirationData.map(project => ({
      ...project,
      // 将tags字符串分割为数组，并去除空格
      tags: project.tags.split(',').map(tag => tag.trim())
    })), []);

  // 筛选项目
  const filteredProjects = useMemo(() => 
    activeFilter === 'All' 
      ? processedProjects 
      : processedProjects.filter(project => 
          project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
        ), [activeFilter, processedProjects]);

  // 使用无限滚动Hook
  const {
    displayedItems: displayedProjects,
    isLoading,
    hasMore,
    lastItemRef,
    reset
  } = useInfiniteScroll(filteredProjects, 9); // 每次加载9个项目

  // 当筛选条件改变时重置
  React.useEffect(() => {
    reset();
  }, [activeFilter, reset]);

  const filterOptions = ['All', 'Branding', 'Digital', 'Motion', 'Graphic', 'Typography', 'Generative Art', 'AIGC'];

  const getTagColor = (tag) => {
    const colors = {
      'Branding': 'bg-design-green',
      'Typography': 'bg-design-yellow',
      'Generative Art': 'bg-design-purple',
      'Motion': 'bg-orange-500',
      'Digital': 'bg-cyan-500',
      'Graphic': 'bg-pink-500',
      'AIGC': 'bg-red-500'
    };
    return colors[tag] || 'bg-gray-500';
  };

  // 不需要手动编码URL，浏览器会自动处理
  const getEncodedPath = (path) => {
    return path;
  };

  // 获取项目的预览图片（用于视频的静态预览）
  const getProjectPreview = (project) => {
    // 判断文件是否为静态图片
    const isStaticImage = (url) => {
      if (!url) return false;
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
      return imageExtensions.some(ext => url.toLowerCase().endsWith(ext));
    };

    // 1. 首先检查main_asset是否是静态图片
    if (project.main_asset && isStaticImage(project.main_asset)) {
      console.log(`项目 ${project.title} 使用main_asset作为预览:`, project.main_asset);
      return project.main_asset;
    }

    // 2. 检查assets中的第一个静态图片
    if (project.assets) {
      const assetsArray = project.assets.split(';').map(asset => asset.trim()).filter(asset => asset);
      const firstStaticImage = assetsArray.find(asset => isStaticImage(asset));
      if (firstStaticImage) {
        console.log(`项目 ${project.title} 使用assets中的图片作为预览:`, firstStaticImage);
        return firstStaticImage;
      }
    }

    // 3. 如果cover是静态图片，返回null（让LazyMedia直接显示cover）
    if (isStaticImage(project.cover)) {
      return null;
    }

    // 4. 最后尝试根据cover路径智能生成预览图片路径
    if (project.cover) {
      const coverUrl = project.cover;
      const previewPatterns = [
        // 尝试将视频文件名替换为常见的静态图片文件名
        { from: /\/[^\/]+\.(mp4|webm|mov)$/, to: '/cover.jpg' },
        { from: /\/[^\/]+\.(mp4|webm|mov)$/, to: '/preview.jpg' },
        { from: /\/([^\/]+)\.(mp4|webm|mov)$/, to: '/$1.jpg' },
        { from: /\/([^\/]+)\.(mp4|webm|mov)$/, to: '/$1.png' }
      ];

      for (const pattern of previewPatterns) {
        if (pattern.from.test(coverUrl)) {
          const previewUrl = coverUrl.replace(pattern.from, pattern.to);
          console.log(`项目 ${project.title} 尝试智能预览路径:`, previewUrl);
          return previewUrl;
        }
      }
    }

    console.log(`项目 ${project.title} 没有找到合适的预览图片`);
    return null;
  };

  return (
    <div className="ml-80 min-h-screen bg-dark-bg">
      {/* Header */}
      <div className="flex justify-between items-start px-8 py-8">
        <h2 className="text-2xl font-medium text-light-gray uppercase">inspiration</h2>
        <div className="flex space-x-4 text-sm font-medium">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`transition-colors duration-200 hover:opacity-80 ${
                activeFilter === option 
                  ? 'text-[#E2E2E2]' 
                  : 'text-[#787878]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-8 pb-8">
        {displayedProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-3 gap-6">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id}
                  ref={index === displayedProjects.length - 1 ? lastItemRef : null}
                  className="cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/5] bg-design-gray rounded-xl overflow-hidden mb-6 group-hover:opacity-80 transition-opacity">
                    <LazyMedia
                      src={getEncodedPath(project.cover)}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      previewSrc={getProjectPreview(project)}
                      placeholder={
                        <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg animate-pulse"></div>
                          <div className="text-xs text-gray-400 mt-2">预加载中...</div>
                        </div>
                      }
                    />
                  </div>
                  <h3 className="text-light-gray text-3xl font-medium mb-2.5 group-hover:opacity-80 transition-opacity uppercase">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-0.5 text-sm font-medium text-dark-bg rounded-md leading-tight ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* 加载更多指示器 */}
            {isLoading && (
              <div className="mt-8">
                <LoadingSpinner 
                  size="md" 
                  text="加载更多内容..." 
                  className="py-8"
                />
              </div>
            )}
            
            {/* 底部状态 */}
            {!hasMore && displayedProjects.length > 0 && (
              <div className="text-center py-8">
                <p className="text-[#787878] text-lg">
                  已显示全部 {displayedProjects.length} 个案例
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-[#787878] text-lg">没有找到符合条件的案例</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default InspirationPage; 