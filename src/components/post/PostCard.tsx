import React from 'react';
import { Divider } from 'primereact/divider';
import { PostCardProps, defaultPostCardProps } from '../../types/Post';
import PostCardHeader from './PostCardHeader';
import PostCardBody from './PostCardBody';
import PostCardFooter from './PostCardFooter';

const PostCard: React.FC<
  PostCardProps & { bgColor: string; titleSize?: string }
> = ({ bgColor, titleSize, ...props }) => {
  const propsWithDefaults = { ...defaultPostCardProps, ...props };

  return (
    <div
      className={`p-card post-card p-4 shadow border-none rounded-none ${bgColor}`}
    >
      <PostCardHeader
        writer={propsWithDefaults.writer}
        community={propsWithDefaults.community}
        createdAt={propsWithDefaults.createdAt}
      />
      <Divider />
      <PostCardBody
        id={propsWithDefaults.id}
        title={propsWithDefaults.title}
        image={propsWithDefaults.image}
        titleSize={titleSize}
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
