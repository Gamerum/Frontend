import React from 'react';
import { Divider } from 'primereact/divider';
import { PostCardProps, defaultPostCardProps } from '../../types/Post';
import { calculateTimePassed } from '../../utils/timeUtils';
import PostCardHeader from './PostCardHeader';
import PostCardBody from './PostCardBody';
import PostCardFooter from './PostCardFooter';

const PostCard: React.FC<PostCardProps> = (props) => {
  const propsWithDefaults = { ...defaultPostCardProps, ...props };
  const {
    id,
    title,
    image,
    commentCount,
    likeCount,
    writer,
    community,
    createdAt,
  } = propsWithDefaults;

  const timePassed = calculateTimePassed(createdAt);
  return (
    <div className="p-card post-card">
      <PostCardHeader
        writer={writer}
        community={community}
        timePassed={timePassed}
      />
      <Divider />
      <PostCardBody id={id} title={title} image={image} />
      <Divider />
      <PostCardFooter
        id={id}
        commentCount={commentCount}
        likeCount={likeCount}
      />
    </div>
  );
};

export default PostCard;
