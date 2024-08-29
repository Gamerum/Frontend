import React from 'react';
import { Divider } from 'primereact/divider';
import PostCardHeader from './PostCardHeader';
import PostCardBody from './PostCardBody';
import PostCardFooter from './PostCardFooter';
import {
  PostCardProps,
  PostCardProvider,
  defaultPostCardProps,
} from '../../contexts/PostCardContext';

const PostCard: React.FC<
  PostCardProps & { bgColor: string; titleSize?: string }
> = ({ bgColor, titleSize, ...props }) => {
  const propsWithDefaults = { ...defaultPostCardProps, ...props };

  return (
    <PostCardProvider value={propsWithDefaults}>
      <div
        className={`p-card post-card p-4 shadow border-none rounded-none ${bgColor}`}
      >
        <PostCardHeader />
        <Divider />
        <PostCardBody />
        <Divider />
        <PostCardFooter />
      </div>
    </PostCardProvider>
  );
};

export default PostCard;
