import React from 'react';
import { PostCardProps, defaultPostCardProps } from '../types/Post';
import PostCardContainer from '../components/post/PostCardContainer';

const MainContent: React.FC = () => {
  const posts: PostCardProps[] = [
    defaultPostCardProps,
    defaultPostCardProps,
    defaultPostCardProps,
  ];

  return (
    <main className="flex-grow p-4">
      <PostCardContainer postCards={posts} />
    </main>
  );
};

export default MainContent;
