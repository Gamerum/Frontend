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
    <div className="post-header flex justify-between items-center p-4">
      <div className="profile-info flex items-center">
        <Avatar
          image={writer.profilePhoto}
          shape="circle"
          size="normal"
          className="mr-2"
        />
        <div className="text-sm font-semibold text-white mr-2">
          <Link to={getProfileUrl(writer.id)}>{writer.nickname}</Link>
        </div>
        <div className="text-gray-500 mr-2">•</div>
        <div className="text-gray-500 text-sm">{timePassed}</div>
      </div>
      <Link
        className="text-sm font-bold text-blue-600"
        to={getCommunityUrl(community.id)}
      >
        {community.title}
      </Link>
    </div>
  );
};

export default PostCardHeader;
