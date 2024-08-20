import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Tag } from 'primereact/tag';
import { getCommunityUrl, getProfileUrl } from '../../utils/urlUtils';
import { PostCardHeaderProps } from '../../types/Post';

const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  writer,
  community,
  timePassed,
}) => {
  return (
    <div className="post-header flex justify-between items-center p-4">
      {/* Profile info */}
      <div className="profile-info flex items-center">
        <Avatar
          image={writer.profilePhoto}
          shape="circle"
          size="normal"
          className="mr-2"
        />
        <div className="text-sm font-semibold text-white mr-2">
          <a href={getProfileUrl(writer.id)}>{writer.nickname}</a>
        </div>
        <div className="text-gray-500 mr-2">•</div>
        <div className="text-gray-500 text-sm">{timePassed}</div>
      </div>
      <a
        className="text-sm font-bold text-blue-600"
        href={getCommunityUrl(community.id)}
      >
        {community.title}
      </a>
    </div>
  );
};

export default PostCardHeader;
