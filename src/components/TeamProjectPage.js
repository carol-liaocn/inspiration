import React from 'react';

const TeamProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: 'project name',
      author: 'author name',
      categories: ['Generative art', 'Digital'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      works: [
        { id: 1, image: '/images/team1-1.jpg' },
        { id: 2, image: '/images/team1-2.jpg' },
        { id: 3, image: '/images/team1-3.jpg' }
      ]
    },
    {
      id: 2,
      title: 'project name',
      author: 'author name',
      categories: ['Motion', 'Graphic'],
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      works: [
        { id: 4, image: '/images/team2-1.jpg' },
        { id: 5, image: '/images/team2-2.jpg' },
        { id: 6, image: '/images/team2-3.jpg' }
      ]
    },
    {
      id: 3,
      title: 'creative vision',
      author: 'sarah chen',
      categories: ['Branding', 'Typography'],
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      works: [
        { id: 7, image: '/images/team3-1.jpg' },
        { id: 8, image: '/images/team3-2.jpg' },
        { id: 9, image: '/images/team3-3.jpg' }
      ]
    },
    {
      id: 4,
      title: 'digital future',
      author: 'alex rodriguez',
      categories: ['Digital', 'Aigc'],
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      works: [
        { id: 10, image: '/images/team4-1.jpg' },
        { id: 11, image: '/images/team4-2.jpg' },
        { id: 12, image: '/images/team4-3.jpg' }
      ]
    },
    {
      id: 5,
      title: 'motion flow',
      author: 'maria kowalski',
      categories: ['Motion', 'Digital'],
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      works: [
        { id: 13, image: '/images/team5-1.jpg' },
        { id: 14, image: '/images/team5-2.jpg' },
        { id: 15, image: '/images/team5-3.jpg' }
      ]
    },
    {
      id: 6,
      title: 'brand identity',
      author: 'david kim',
      categories: ['Graphic', 'Branding'],
      description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
      works: [
        { id: 16, image: '/images/team6-1.jpg' },
        { id: 17, image: '/images/team6-2.jpg' },
        { id: 18, image: '/images/team6-3.jpg' }
      ]
    },
    {
      id: 7,
      title: 'type experiment',
      author: 'elena vasquez',
      categories: ['Typography', 'Graphic'],
      description: 'Explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      works: [
        { id: 19, image: '/images/team7-1.jpg' },
        { id: 20, image: '/images/team7-2.jpg' },
        { id: 21, image: '/images/team7-3.jpg' }
      ]
    },
    {
      id: 8,
      title: 'ai generation',
      author: 'james wright',
      categories: ['Generative art', 'Aigc'],
      description: 'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      works: [
        { id: 22, image: '/images/team8-1.jpg' },
        { id: 23, image: '/images/team8-2.jpg' },
        { id: 24, image: '/images/team8-3.jpg' }
      ]
    },
    {
      id: 9,
      title: 'interactive design',
      author: 'lisa wang',
      categories: ['Digital', 'Motion'],
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      works: [
        { id: 25, image: '/images/team9-1.jpg' },
        { id: 26, image: '/images/team9-2.jpg' },
        { id: 27, image: '/images/team9-3.jpg' }
      ]
    },
    {
      id: 10,
      title: 'visual identity',
      author: 'thomas anderson',
      categories: ['Branding', 'Graphic'],
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      works: [
        { id: 28, image: '/images/team10-1.jpg' },
        { id: 29, image: '/images/team10-2.jpg' },
        { id: 30, image: '/images/team10-3.jpg' }
      ]
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Branding': 'bg-design-green',
      'Digital': 'bg-cyan-500',
      'Motion': 'bg-orange-500',
      'Graphic': 'bg-pink-500',
      'Typography': 'bg-design-yellow',
      'Generative art': 'bg-design-purple',
      'Aigc': 'bg-red-500'
    };
    return colors[category] || 'bg-design-gray';
  };

  return (
    <div className="ml-80 min-h-screen bg-dark-bg">
      {/* Page Header */}
      <div className="px-8 py-8">
        <h2 className="text-2xl font-medium text-light-gray uppercase">team project</h2>
      </div>

      {/* First Divider Line - aligned with INSPIRATION text */}
      <div className="px-8">
        <div className="w-full" style={{ height: '0.2px', backgroundColor: '#E2E2E2' }}></div>
      </div>
      <div className="mb-4"></div>

      {/* Projects Grid */}
      <div className="px-8 space-y-16">
        {projects.map((project, index) => (
          <div key={project.id}>
            {/* Divider Line above each project (except first) */}
            {index > 0 && (
              <>
                <div className="w-full" style={{ height: '0.2px', backgroundColor: '#E2E2E2' }}></div>
                <div className="mb-4"></div>
              </>
            )}
            
            {/* Project Row - 4 Column Layout */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              
              {/* Column 1: Project Information */}
              <div className="flex flex-col h-full">
                <div className="space-y-1.5">
                  {/* Project Title */}
                  <h3 className="text-2xl font-medium text-light-gray leading-tight capitalize">
                    {project.title}
                  </h3>
                  
                  {/* Project Author */}
                  <p className="text-lg font-medium text-medium-gray capitalize">
                    by {project.author}
                  </p>
                  
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 text-sm font-medium text-dark-bg rounded-md leading-tight ${getCategoryColor(category)}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Columns 2-4: Image Grid (3 columns of images) - 3:4 Portrait Ratio */}
              <div className="col-span-3 grid grid-cols-3 gap-4">
                {project.works.slice(0, 3).map((work, workIndex) => (
                  <div
                    key={work.id}
                    className="aspect-[3/4] bg-design-gray overflow-hidden"
                  >
                    <img
                      src={work.image}
                      alt={`${project.title} work ${work.id}`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProjectPage; 