import React from 'react';
import { Divider } from 'primereact/divider';
import { PostCardProps, defaultPostCardProps } from '../../types/Post';
import { calculateTimePassed } from '../../utils/timeUtils';
import PostCardHeader from './PostCardHeader';
import PostCardBody from './PostCardBody';
import PostCardFooter from './PostCardFooter';

const PostCard: React.FC<PostCardProps> = (props) => {
  const propsWithDefaults = { ...defaultPostCardProps, ...props };

  const timePassed = calculateTimePassed(propsWithDefaults.createdAt);
  return (
    <div className="p-card post-card bg-zinc-900 p-4 shadow mb-4">
      <PostCardHeader
        writer={propsWithDefaults.writer}
        community={propsWithDefaults.community}
        timePassed={timePassed}
      />
      <Divider />
      <PostCardBody
        id={propsWithDefaults.id}
        title={propsWithDefaults.title}
        image={propsWithDefaults.image}
      />
      <Divider />
      <PostCardFooter
        id={propsWithDefaults.id}
        commentCount={propsWithDefaults.commentCount}
        likeCount={propsWithDefaults.likeCount}
      />
    </div>
  );
};

export default PostCard;
