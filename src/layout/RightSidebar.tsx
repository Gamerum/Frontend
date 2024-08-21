import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <aside className="w-64 p-4 bg-red-300 h-full flex-col overflow-y-auto hidden md:flex">
      <div className="mb-4 bg-white p-4 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Panel 1</h2>
        <p>Content of Panel 1</p>
      </div>
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Panel 2</h2>
        <p>Content of Panel 2</p>
      </div>
    </aside>
  );
};

export default RightSidebar;
