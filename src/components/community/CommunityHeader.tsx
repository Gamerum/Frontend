import React from 'react';
import { Card } from 'primereact/card';

interface Community {
  backgroundImage: string;
  photo: string;
  title: string;
  description: string;
}

interface CommunityHeaderProps {
  community: Community;
}

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ community }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[40rem] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={community.backgroundImage}
          alt="Community Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative flex items-center justify-center h-full z-10">
        <Card className="w-full bg-transparent shadow-lg p-6 flex flex-col items-center z-10">
          <div className="flex justify-center mb-4">
            <img
              src={community.photo}
              alt="Community"
              className="w-24 h-24 border-2 border-white shadow-2xl shadow-black"
            />
          </div>
          <div className="text-center">
            {/* Title Container */}
            <h1 className="text-2xl font-bold text-white mb-2">
              {community.title}
            </h1>
            {/* Description Container */}
            <p className="text-gray-300 text-xs break-words whitespace-normal">
              1234567890 1234567890 1234567890 1234567890 1234567890 1234567890
              1234567890 1234567890 1234567890 1234567890
            </p>
          </div>
        </Card>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-main-800 via-transparent to-transparent opacity-100 z-0"></div>
      </div>
    </div>
  );
};

export default CommunityHeader;
