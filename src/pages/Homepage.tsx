import React from 'react';
import LeftSidebar from '../layout/LeftSidebar';
import MainContent from '../layout/MainContent';
import RightSidebar from '../layout/RightSidebar';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-grow overflow-hidden">
      <LeftSidebar />
      <div className="container">
        <MainContent />
      </div>
      <RightSidebar />
    </div>
  );
};

export default HomePage;
