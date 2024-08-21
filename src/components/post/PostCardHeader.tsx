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
    <div className="post-header relative flex flex-col sm:flex-row sm:justify-between p-4">
      <div className="flex items-center flex-wrap">
        <Avatar
          image={writer.profilePhoto}
          shape="circle"
          size="normal"
          className="mr-2"
        />
        <div className="flex flex-col sm:flex-row items-start">
          <div className="text-sm font-semibold text-white mr-2 truncate">
            <Link to={getProfileUrl(writer.id)}>{writer.nickname}</Link>
          </div>
          {/* Separator and Time Passed */}
          <div className="hidden sm:flex items-center text-gray-500 text-sm">
            <div className="mr-2">•</div>
            <div>{timePassed}</div>
          </div>
        </div>
      </div>

      {/* Time Passed on Mobile */}
      <div className="absolute top-4 right-4 mt-2 text-gray-500 text-sm sm:hidden">
        {timePassed}
      </div>

      {/* Community Name */}
      <Link
        className="text-sm font-bold text-blue-600 mt-4 sm:mt-2 truncate"
        to={getCommunityUrl(community.id)}
      >
        {community.title}
      </Link>
    </div>
  );
};

export default PostCardHeader;
