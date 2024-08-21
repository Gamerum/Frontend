import React from 'react';
import Header from '../layout/Header';
import LeftSidebar from '../layout/LeftSidebar';
import MainContent from '../layout/MainContent';
import RightSidebar from '../layout/RightSidebar';

const HomePage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-main-800 min-h-screen">
      <Header />
      <div className="flex flex-grow overflow-hidden">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
