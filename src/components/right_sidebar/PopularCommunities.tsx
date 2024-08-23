import React from 'react';
import { PopularCommunitiesProps } from '../../types/RightSidebar';
import { formatNumber } from '../../utils/numberFormatter';
import { getCommunityUrl } from '../../utils/urlUtils';

const PopularCommunities: React.FC<PopularCommunitiesProps> = ({
  popularCommunities,
}) => {
  return (
    <div className="shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Popular Communities</h2>
      <div className="flex flex-col space-y-2">
        {popularCommunities.map((community) => (
          <a
            key={community.id}
            className="flex items-center transition-shadow duration-300 ease-in-out hover:shadow-xl hover:bg-main-800"
            href={getCommunityUrl(community.id)}
          >
            <img
              src={community.image}
              alt={community.name}
              className="w-8 h-8 object-cover"
            />
            <div className="flex-1 p-2">
              <h3 className="text-xs font-medium text-white">
                {community.name}
              </h3>
            </div>
            <div className="p-2 text-xs text-gray-400 flex items-end">
              {formatNumber(community.memberCount)} Members
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularCommunities;
