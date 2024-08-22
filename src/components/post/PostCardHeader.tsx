import React from 'react';
import { Avatar } from 'primereact/avatar';
import { getCommunityUrl, getProfileUrl } from '../../utils/urlUtils';
import { PostCardHeaderProps } from '../../types/Post';
import { Link } from 'react-router-dom';

const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  writer,
  community,
  timePassed,
}) => {
  return (
    <div className="post-header-mobile flex flex-col ml-1 mr-1 mt-2">
      {/* Header Content */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Avatar
            image={writer.profilePhoto}
            shape="circle"
            size="normal"
            className="mr-2"
          />
          <div className="flex flex-col">
            <Link
              to={getProfileUrl(writer.id)}
              className="text-sm font-semibold text-white"
            >
              {writer.nickname}
            </Link>
            <Link
              to={getCommunityUrl(community.id)}
              className="text-xs font-bold text-blue-500 mt-1"
            >
              {community.title}
            </Link>
          </div>
        </div>
        {/* Time Passed */}
        <div className="text-gray-400 text-xs">{timePassed}</div>
      </div>
    </div>
  );
};

export default PostCardHeader;
