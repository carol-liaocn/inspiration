import React, { useState } from 'react';

const ArtistPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filterOptions = [
    'All',
    'Branding',
    'Digital',
    'Motion',
    'Graphic',
    'Typography',
    'Generative Art',
    'Aigc'
  ];
  const artists = [
    {
      id: 1,
      name: 'artist name',
      categories: ['Generative art', 'Digital'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      works: [
        { id: 1, image: '/images/artist1-1.jpg' },
        { id: 2, image: '/images/artist1-2.jpg' },
        { id: 3, image: '/images/artist1-3.jpg' },
        { id: 4, image: '/images/artist1-4.jpg' },
        { id: 5, image: '/images/artist1-5.jpg' },
        { id: 6, image: '/images/artist1-6.jpg' }
      ]
    },
    {
      id: 2,
      name: 'artist name',
      categories: ['Motion', 'Graphic'],
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      works: [
        { id: 7, image: '/images/artist2-1.jpg' },
        { id: 8, image: '/images/artist2-2.jpg' },
        { id: 9, image: '/images/artist2-3.jpg' },
        { id: 10, image: '/images/artist2-4.jpg' },
        { id: 11, image: '/images/artist2-5.jpg' },
        { id: 12, image: '/images/artist2-6.jpg' }
      ]
    },
    {
      id: 3,
      name: 'sarah chen',
      categories: ['Branding', 'Typography'],
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      works: [
        { id: 13, image: '/images/artist3-1.jpg' },
        { id: 14, image: '/images/artist3-2.jpg' },
        { id: 15, image: '/images/artist3-3.jpg' }
      ]
    },
    {
      id: 4,
      name: 'alex rodriguez',
      categories: ['Digital', 'Aigc'],
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      works: [
        { id: 16, image: '/images/artist4-1.jpg' },
        { id: 17, image: '/images/artist4-2.jpg' },
        { id: 18, image: '/images/artist4-3.jpg' }
      ]
    },
    {
      id: 5,
      name: 'maria kowalski',
      categories: ['Motion', 'Digital'],
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      works: [
        { id: 19, image: '/images/artist5-1.jpg' },
        { id: 20, image: '/images/artist5-2.jpg' },
        { id: 21, image: '/images/artist5-3.jpg' }
      ]
    },
    {
      id: 6,
      name: 'david kim',
      categories: ['Graphic', 'Branding'],
      description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
      works: [
        { id: 22, image: '/images/artist6-1.jpg' },
        { id: 23, image: '/images/artist6-2.jpg' },
        { id: 24, image: '/images/artist6-3.jpg' }
      ]
    },
    {
      id: 7,
      name: 'elena vasquez',
      categories: ['Typography', 'Graphic'],
      description: 'Explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      works: [
        { id: 25, image: '/images/artist7-1.jpg' },
        { id: 26, image: '/images/artist7-2.jpg' },
        { id: 27, image: '/images/artist7-3.jpg' }
      ]
    },
    {
      id: 8,
      name: 'james wright',
      categories: ['Generative art', 'Aigc'],
      description: 'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      works: [
        { id: 28, image: '/images/artist8-1.jpg' },
        { id: 29, image: '/images/artist8-2.jpg' },
        { id: 30, image: '/images/artist8-3.jpg' }
      ]
    },
    {
      id: 9,
      name: 'lisa wang',
      categories: ['Digital', 'Motion'],
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      works: [
        { id: 31, image: '/images/artist9-1.jpg' },
        { id: 32, image: '/images/artist9-2.jpg' },
        { id: 33, image: '/images/artist9-3.jpg' }
      ]
    },
    {
      id: 10,
      name: 'thomas anderson',
      categories: ['Branding', 'Graphic'],
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      works: [
        { id: 34, image: '/images/artist10-1.jpg' },
        { id: 35, image: '/images/artist10-2.jpg' },
        { id: 36, image: '/images/artist10-3.jpg' }
      ]
    },
    {
      id: 11,
      name: 'anna petrov',
      categories: ['Typography', 'Digital'],
      description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
      works: [
        { id: 37, image: '/images/artist11-1.jpg' },
        { id: 38, image: '/images/artist11-2.jpg' },
        { id: 39, image: '/images/artist11-3.jpg' }
      ]
    },
    {
      id: 12,
      name: 'carlos mendez',
      categories: ['Motion', 'Generative art'],
      description: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
      works: [
        { id: 40, image: '/images/artist12-1.jpg' },
        { id: 41, image: '/images/artist12-2.jpg' },
        { id: 42, image: '/images/artist12-3.jpg' }
      ]
    },
    {
      id: 13,
      name: 'sophie miller',
      categories: ['Aigc', 'Digital'],
      description: 'Aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      works: [
        { id: 43, image: '/images/artist13-1.jpg' },
        { id: 44, image: '/images/artist13-2.jpg' },
        { id: 45, image: '/images/artist13-3.jpg' }
      ]
    },
    {
      id: 14,
      name: 'mikhail popov',
      categories: ['Graphic', 'Typography'],
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.',
      works: [
        { id: 46, image: '/images/artist14-1.jpg' },
        { id: 47, image: '/images/artist14-2.jpg' },
        { id: 48, image: '/images/artist14-3.jpg' }
      ]
    },
    {
      id: 15,
      name: 'yuki tanaka',
      categories: ['Branding', 'Motion'],
      description: 'Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.',
      works: [
        { id: 49, image: '/images/artist15-1.jpg' },
        { id: 50, image: '/images/artist15-2.jpg' },
        { id: 51, image: '/images/artist15-3.jpg' }
      ]
    },
    {
      id: 16,
      name: 'claire dubois',
      categories: ['Digital', 'Generative art'],
      description: 'Voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      works: [
        { id: 52, image: '/images/artist16-1.jpg' },
        { id: 53, image: '/images/artist16-2.jpg' },
        { id: 54, image: '/images/artist16-3.jpg' }
      ]
    },
    {
      id: 17,
      name: 'roberto silva',
      categories: ['Typography', 'Branding'],
      description: 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      works: [
        { id: 55, image: '/images/artist17-1.jpg' },
        { id: 56, image: '/images/artist17-2.jpg' },
        { id: 57, image: '/images/artist17-3.jpg' }
      ]
    },
    {
      id: 18,
      name: 'nadia kozlov',
      categories: ['Aigc', 'Motion'],
      description: 'Velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
      works: [
        { id: 58, image: '/images/artist18-1.jpg' },
        { id: 59, image: '/images/artist18-2.jpg' },
        { id: 60, image: '/images/artist18-3.jpg' }
      ]
    },
    {
      id: 19,
      name: 'finn larsson',
      categories: ['Graphic', 'Digital'],
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
      works: [
        { id: 61, image: '/images/artist19-1.jpg' },
        { id: 62, image: '/images/artist19-2.jpg' },
        { id: 63, image: '/images/artist19-3.jpg' }
      ]
    },
    {
      id: 20,
      name: 'zara hassan',
      categories: ['Motion', 'Typography'],
      description: 'Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      works: [
        { id: 64, image: '/images/artist20-1.jpg' },
        { id: 65, image: '/images/artist20-2.jpg' },
        { id: 66, image: '/images/artist20-3.jpg' }
      ]
    },
    {
      id: 21,
      name: 'lucas ferrari',
      categories: ['Generative art', 'Branding'],
      description: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      works: [
        { id: 67, image: '/images/artist21-1.jpg' },
        { id: 68, image: '/images/artist21-2.jpg' },
        { id: 69, image: '/images/artist21-3.jpg' }
      ]
    },
    {
      id: 22,
      name: 'asha patel',
      categories: ['Digital', 'Graphic'],
      description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis.',
      works: [
        { id: 70, image: '/images/artist22-1.jpg' },
        { id: 71, image: '/images/artist22-2.jpg' },
        { id: 72, image: '/images/artist22-3.jpg' }
      ]
    },
    {
      id: 23,
      name: 'erik nielsen',
      categories: ['Aigc', 'Typography'],
      description: 'Est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
      works: [
        { id: 73, image: '/images/artist23-1.jpg' },
        { id: 74, image: '/images/artist23-2.jpg' },
        { id: 75, image: '/images/artist23-3.jpg' }
      ]
    },
    {
      id: 24,
      name: 'leila farid',
      categories: ['Branding', 'Digital'],
      description: 'Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis.',
      works: [
        { id: 76, image: '/images/artist24-1.jpg' },
        { id: 77, image: '/images/artist24-2.jpg' },
        { id: 78, image: '/images/artist24-3.jpg' }
      ]
    },
    {
      id: 25,
      name: 'kai zhang',
      categories: ['Motion', 'Generative art'],
      description: 'Debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
      works: [
        { id: 79, image: '/images/artist25-1.jpg' },
        { id: 80, image: '/images/artist25-2.jpg' },
        { id: 81, image: '/images/artist25-3.jpg' }
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

  // Filter artists based on selected filter
  const filteredArtists = artists.filter(artist => {
    if (activeFilter === 'All') return true;
    return artist.categories.some(category => 
      category.toLowerCase() === activeFilter.toLowerCase().replace(' ', ' ')
    );
  });

  return (
    <div className="ml-80 min-h-screen bg-dark-bg">
      {/* Page Header */}
      <div className="px-8 py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium text-light-gray uppercase">artist</h2>
          
          {/* Filter Buttons */}
          <div className="flex space-x-4 text-sm font-medium">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`transition-colors duration-200 hover:opacity-80 ${
                  activeFilter === filter
                    ? 'text-[#E2E2E2]'
                    : 'text-[#787878]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* First Divider Line - aligned with INSPIRATION text */}
      <div className="px-8">
        <div className="w-full" style={{ height: '0.2px', backgroundColor: '#E2E2E2' }}></div>
      </div>
      <div className="mb-4"></div>

      {/* Artists Grid */}
      <div className="px-8 space-y-16">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist, index) => (
          <div key={artist.id}>
            {/* Divider Line above each artist (except first) */}
            {index > 0 && (
              <>
                <div className="w-full" style={{ height: '0.2px', backgroundColor: '#E2E2E2' }}></div>
                <div className="mb-4"></div>
              </>
            )}
            
            {/* Artist Row - 4 Column Layout */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              
              {/* Column 1: Artist Information */}
              <div className="flex flex-col justify-between h-full">
                <div className="space-y-1">
                  {/* Artist Name */}
                  <h3 className="text-2xl font-medium text-light-gray leading-tight capitalize">
                    {artist.name}
                  </h3>
                  
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {artist.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 text-sm font-medium text-dark-bg rounded-md leading-tight ${getCategoryColor(category)}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* View All Button - aligned to bottom */}
                <div className="flex items-center space-x-3 self-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '0.2px solid #E2E2E2' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E2E2E2" strokeWidth="0.4" className="text-light-gray">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-light-gray">view all</span>
                </div>
              </div>

              {/* Columns 2-4: Image Grid (3 columns of images) */}
              <div className="col-span-3 grid grid-cols-3 gap-4">
                {artist.works.slice(0, 3).map((work, workIndex) => (
                  <div
                    key={work.id}
                    className="aspect-square bg-design-gray overflow-hidden"
                  >
                    <img
                      src={work.image}
                      alt={`${artist.name} work ${work.id}`}
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
        ))
        ) : (
          <div className="text-center py-16">
            <p className="text-medium-gray text-lg">No artists found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistPage; 