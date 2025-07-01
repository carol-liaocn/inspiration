import React from 'react';

const ArtistPage = () => {
  const artists = [
    {
      id: 1,
      name: 'artist name',
      category: 'Generative art',
      works: [
        { id: 1, image: '/images/artist1-1.jpg' },
        { id: 2, image: '/images/artist1-2.jpg' },
        { id: 3, image: '/images/artist1-3.jpg' }
      ]
    },
    {
      id: 2,
      name: 'artist name',
      category: 'Generative art',
      works: [
        { id: 4, image: '/images/artist2-1.jpg' },
        { id: 5, image: '/images/artist2-2.jpg' },
        { id: 6, image: '/images/artist2-3.jpg' }
      ]
    }
  ];

  return (
    <div className="ml-80 min-h-screen bg-dark-bg">
      <div className="px-8 py-8">
        <h2 className="text-2xl font-medium text-light-gray uppercase">artist</h2>
        <div className="mt-8">
          <p className="text-light-gray opacity-60">艺术家页面内容待完善...</p>
        </div>
      </div>

      {/* Artists */}
      <div className="px-12 py-12 space-y-24">
        {artists.map((artist) => (
          <div key={artist.id} className="space-y-12">
            {/* Artist Header */}
            <div className="flex items-center space-x-6">
              <h3 className="text-4xl font-medium text-light-gray">{artist.name}</h3>
              <span className="px-6 py-3 text-2xl font-medium text-dark-bg rounded-xl bg-design-purple">
                {artist.category}
              </span>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-3 gap-6">
              {artist.works.map((work) => (
                <div
                  key={work.id}
                  className="aspect-square bg-design-gray rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
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

            {/* Divider line */}
            <div className="w-full h-px bg-light-gray"></div>

            {/* View All Button */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 border border-light-gray rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-light-gray">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <span className="text-2xl font-medium text-light-gray">view all</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage; 