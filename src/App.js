import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import InspirationPage from './components/InspirationPage';
import ArtistPage from './components/ArtistPage';
import TeamProjectPage from './components/TeamProjectPage';

function App() {
  const [activeTab, setActiveTab] = useState('inspiration');

  const renderContent = () => {
    switch (activeTab) {
      case 'inspiration':
        return <InspirationPage />;
      case 'artist':
        return <ArtistPage />;
      case 'team project':
        return <TeamProjectPage />;
      default:
        return <InspirationPage />;
    }
  };

  return (
    <div className="flex h-screen bg-dark-bg text-light-gray">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;