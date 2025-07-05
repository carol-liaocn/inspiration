import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './components/home/HomePage';
import InspirationPage from './components/InspirationPage';
import ArtistPage from './components/ArtistPage';
import TeamProjectPage from './components/TeamProjectPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage activeTab={activeTab} setActiveTab={setActiveTab} />;
      case 'inspiration':
        return <InspirationPage />;
      case 'artist':
        return <ArtistPage />;
      case 'team project':
        return <TeamProjectPage />;
      default:
        return <HomePage activeTab={activeTab} setActiveTab={setActiveTab} />;
    }
  };

  // 如果在首页，不显示传统的侧边栏，因为首页有自己的导航
  if (activeTab === 'home') {
    return (
      <div className="h-screen bg-dark-bg text-light-gray">
        {renderContent()}
      </div>
    );
  }

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