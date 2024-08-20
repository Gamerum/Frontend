import React from 'react';
import { Avatar } from 'primereact/avatar';
import { getCommunityUrl, getUserProfileUrl } from '../../utils/urlUtils';
import { PostCardHeaderProps } from '../../types/Post';

const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  writer,
  community,
  timePassed,
}) => {
  return (
    <div className="post-header">
      <div className="post-header-left">
        <a href={getUserProfileUrl(writer.id)}>
          <Avatar image={writer.profilePhoto} shape="circle" size="large" />
        </a>
        <div className="post-header-info">
          <a href={getUserProfileUrl(writer.id)} className="post-nickname-link">
            <span className="post-nickname">{writer.nickname}</span>
          </a>
          <span className="dot-separator">·</span>
          <span className="post-time">{timePassed}</span>
        </div>
      </div>
      <div className="post-header-right">
        <a href={getCommunityUrl(community.id)} className="post-community-link">
          <span className="post-community">{community.title}</span>
        </a>
      </div>
    </div>
  );
};

export default PostCardHeader;
