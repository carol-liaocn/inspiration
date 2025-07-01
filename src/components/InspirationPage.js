import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const InspirationPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '案例名称位置',
      image: '/images/project1.jpg',
      tags: ['Branding', 'Typography', 'Generative Art'],
      description: 'OPENAI开发者日的新视觉体系，通过创意编程实现有机的动效设计，诠释OPENAI连接人类与科技的使命。\n\n我们尊重 OpenAI 令人耳目一新的对现实的追求，并通过设计、动效和创意编码项目来支持这种真实性。',
      author: 'studiodumbar',
      link: 'https://studiodumbar.com/work/openai'
    },
    {
      id: 2,
      title: '案例名称位置',
      image: '/images/project2.jpg',
      tags: ['Branding', 'Digital', 'Motion'],
      description: 'OPENAI开发者日的新视觉体系，通过创意编程实现有机的动效设计，诠释OPENAI连接人类与科技的使命。\n\n我们尊重 OpenAI 令人耳目一新的对现实的追求，并通过设计、动效和创意编码项目来支持这种真实性。',
      author: 'studiodumbar',
      link: 'https://studiodumbar.com/work/openai'
    },
    {
      id: 3,
      title: '案例名称位置',
      image: '/images/project3.jpg',
      tags: ['Typography', 'Graphic', 'Aigc'],
      description: 'OPENAI开发者日的新视觉体系，通过创意编程实现有机的动效设计，诠释OPENAI连接人类与科技的使命。\n\n我们尊重 OpenAI 令人耳目一新的对现实的追求，并通过设计、动效和创意编码项目来支持这种真实性。',
      author: 'studiodumbar',
      link: 'https://studiodumbar.com/work/openai'
    },
    {
      id: 4,
      title: '案例名称位置',
      image: '/images/project4.jpg',
      tags: ['Branding', 'Typography', 'Generative Art'],
      description: 'OPENAI开发者日的新视觉体系，通过创意编程实现有机的动效设计，诠释OPENAI连接人类与科技的使命。\n\n我们尊重 OpenAI 令人耳目一新的对现实的追求，并通过设计、动效和创意编码项目来支持这种真实性。',
      author: 'studiodumbar',
      link: 'https://studiodumbar.com/work/openai'
    },
    {
      id: 5,
      title: '案例名称位置',
      image: '/images/project5.jpg',
      tags: ['Digital', 'Motion', 'Graphic'],
      description: 'OPENAI开发者日的新视觉体系，通过创意编程实现有机的动效设计，诠释OPENAI连接人类与科技的使命。\n\n我们尊重 OpenAI 令人耳目一新的对现实的追求，并通过设计、动效和创意编码项目来支持这种真实性。',
      author: 'studiodumbar',
      link: 'https://studiodumbar.com/work/openai'
    },
    {
      id: 6,
      title: '案例名称位置',
      image: '/images/project6.jpg',
      tags: ['Typography', 'Generative Art', 'Aigc'],
      description: 'OPENAI开发者日的新视觉体系，通过创意编程实现有机的动效设计，诠释OPENAI连接人类与科技的使命。\n\n我们尊重 OpenAI 令人耳目一新的对现实的追求，并通过设计、动效和创意编码项目来支持这种真实性。',
      author: 'studiodumbar',
      link: 'https://studiodumbar.com/work/openai'
    }
  ];

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

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => 
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