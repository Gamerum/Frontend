import React from 'react';
import { Avatar } from 'primereact/avatar';
import { getCommunityUrl, getProfileUrl } from '../../utils/urlUtils';
import { Link } from 'react-router-dom';
import { calculateTimePassed } from '../../utils/timeUtils';
import { useTranslation } from 'react-i18next';
import PostOptionsDropdownMenu from './PostOptionsDropdownMenu';
import { usePostCard } from '../../contexts/PostCardContext';
import { useLocation } from 'react-router-dom';

const PostCardHeader: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const post = usePostCard();
  const timePassed = calculateTimePassed(post.createdAt, t);

  return (
    <div className="post-header-mobile flex flex-col ml-1 mr-1 mt-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Avatar
            image={post.writer.profilePhoto}
            shape="circle"
            size="normal"
            className="mr-2"
          />
          <div className="flex flex-col">
            <Link
              to={getProfileUrl(post.writer.id)}
              className="text-sm font-semibold text-white"
            >
              {post.writer.nickname}
            </Link>
            {location.pathname.startsWith('/community') ? (
              <p className="text-xs font-bold text-blue-500 mt-1">{post.tag}</p>
            ) : (
              <Link
                to={getCommunityUrl(post.community.id)}
                className="text-xs font-bold text-blue-500 mt-1"
              >
                {post.community.title}
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-gray-400 text-xs">{timePassed}</div>
          <PostOptionsDropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default PostCardHeader;
