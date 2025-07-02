import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import inspirationData from '../data/inspiration_data.json';

const InspirationPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // 处理标签字符串，转换为数组
  const processedProjects = inspirationData.map(project => ({
    ...project,
    // 将tags字符串分割为数组，并去除空格
    tags: project.tags.split(',').map(tag => tag.trim())
  }));

  const filterOptions = ['All', 'Branding', 'Digital', 'Motion', 'Graphic', 'Typography', 'Generative Art', 'Aigc'];

  const getTagColor = (tag) => {
    const colors = {
      'Branding': 'bg-design-green',
      'Typography': 'bg-design-yellow',
      'Generative Art': 'bg-design-purple',
      'Motion': 'bg-orange-500',
      'Digital': 'bg-cyan-500',
      'Graphic': 'bg-pink-500',
      'Aigc': 'bg-red-500'
    };
    return colors[tag] || 'bg-gray-500';
  };

  // 判断文件是否为视频
  const isVideo = (filePath) => {
    return filePath.toLowerCase().endsWith('.mp4');
  };

  // 渲染媒体内容（图片或视频）
  const renderMedia = (project) => {
    // 对路径进行URL编码处理，但保留斜杠
    const encodedPath = project.cover.split('/').map(segment => encodeURIComponent(segment)).join('/');
    
    if (isVideo(project.cover)) {
      return (
        <video
          src={encodedPath}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
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
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.style.backgroundColor = '#D9D9D9';
          }}
        />
      );
    }
  };

  // 筛选项目
  const filteredProjects = activeFilter === 'All' 
    ? processedProjects 
    : processedProjects.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
      );

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
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/5] bg-design-gray rounded-xl overflow-hidden mb-6 group-hover:opacity-80 transition-opacity">
                  {renderMedia(project)}
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