import React from 'react';

const TeamProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: '项目名字',
      author: '名字',
      tags: ['Generative art'],
      images: [
        { id: 1, image: '/images/team1-1.jpg' },
        { id: 2, image: '/images/team1-2.jpg' },
        { id: 3, image: '/images/team1-3.jpg' }
      ]
    },
    {
      id: 2,
      title: '项目名字',
      author: '名字',
      tags: ['Generative art'],
      images: [
        { id: 4, image: '/images/team2-1.jpg' },
        { id: 5, image: '/images/team2-2.jpg' },
        { id: 6, image: '/images/team2-3.jpg' }
      ]
    }
  ];

  const getTagColor = (tag) => {
    const colors = {
      'branding': 'bg-design-green',
      'typography': 'bg-design-yellow',
      'Generative art': 'bg-design-purple',
      'motion': 'bg-orange-500',
      'digital': 'bg-cyan-500'
    };
    return colors[tag] || 'bg-gray-500';
  };

  return (
    <div className="ml-80 min-h-screen bg-dark-bg">
      <div className="px-8 py-8">
        <h2 className="text-2xl font-medium text-light-gray uppercase">team project</h2>
        <div className="mt-8">
          <p className="text-light-gray opacity-60">团队项目页面内容待完善...</p>
        </div>
      </div>

      {/* Projects */}
      <div className="px-12 py-12 space-y-32">
        {projects.map((project) => (
          <div key={project.id} className="space-y-12">
            {/* Project Header */}
            <div className="space-y-4">
              <h3 className="text-4xl font-medium text-light-gray uppercase">{project.title}</h3>
              <p className="text-3xl text-light-gray font-medium">by {project.author}</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-6 py-3 text-2xl font-medium text-dark-bg rounded-xl ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-light-gray"></div>

            {/* Project Images */}
            <div className="grid grid-cols-3 gap-6">
              {project.images.map((imageItem, index) => (
                <div
                  key={imageItem.id}
                  className="aspect-[4/5] bg-design-gray rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <img
                    src={imageItem.image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.style.backgroundColor = '#D9D9D9';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProjectPage; 