import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import inspirationProjects from '../data/inspiration_projects.json';

const InspirationPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // 从JSON数据创建项目列表，添加id和默认的描述、作者、链接信息
  const projects = inspirationProjects.map((project, index) => ({
    id: index + 1,
    title: project.title,
    image: project.image,
    tags: project.tags,
    description: 'OPENAI开发者日的新视觉体系，通过创意编程实现有机的动效设计，诠释OPENAI连接人类与科技的使命。\n\n我们尊重 OpenAI 令人耳目一新的对现实的追求，并通过设计、动效和创意编码项目来支持这种真实性。',
    author: 'studiodumbar',
    link: 'https://studiodumbar.com/work/openai'
  }));

  const filterOptions = ['All', 'Branding', 'Digital', 'Motion', 'Graphic', 'Typography', 'Generative Art', 'Aigc'];

  const getTagColor = (tag) => {
    const colors = {
      'Branding': 'bg-design-green',
      'Typography': 'bg-design-yellow',
      'Generative Art': 'bg-design-purple',
      'Generatve art': 'bg-design-purple', // 兼容JSON中的拼写
      'Motion': 'bg-orange-500',
      'Digital': 'bg-cyan-500',
      'Graphic': 'bg-pink-500',
      'Aigc': 'bg-red-500'
    };
    return colors[tag] || 'bg-gray-500';
  };

  // 判断文件是否为视频
  const isVideo = (imagePath) => {
    return imagePath.toLowerCase().endsWith('.mp4');
  };

  // 渲染媒体内容（图片或视频）
  const renderMedia = (project) => {
    if (isVideo(project.image)) {
      return (
        <video
          src={project.image}
          autoPlay
          loop
          muted
          className="object-cover object-center w-full h-[300px] rounded-xl"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.style.backgroundColor = '#D9D9D9';
          }}
        />
      );
    } else {
      return (
        <img
          src={project.image}
          alt={project.title}
          className="object-cover object-center w-full h-[300px] rounded-xl"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.style.backgroundColor = '#D9D9D9';
          }}
        />
      );
    }
  };

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => 
    project.tags.some(tag => {
      // 处理"Generative Art"和"Generatve art"的匹配
      const normalizedTag = tag.toLowerCase().replace(/generatve/, 'generative');
      const normalizedFilter = activeFilter.toLowerCase().replace(/generative art/, 'generative art');
      return normalizedTag === normalizedFilter;
    })
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
              onClick={() => setActiveFilter(option.toLowerCase())}
              className={`transition-colors duration-200 hover:opacity-80 ${
                activeFilter === option.toLowerCase() 
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