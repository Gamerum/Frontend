import React, { useState } from 'react';

const LeftSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${isOpen ? 'w-64' : 'w-16'} bg-gray-800 text-white h-full flex flex-col`}
    >
      <button onClick={toggleSidebar} className="p-4 focus:outline-none">
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <nav className="flex-grow">
          <ul className="p-4">
            <li className="mb-2">Menu Item 1</li>
            <li className="mb-2">Menu Item 2</li>
            <li className="mb-2">Menu Item 3</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default LeftSidebar;
