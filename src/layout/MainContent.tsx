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
      <div className="h-full overflow-y-auto scrollbar-hide">
        <PostCardContainer postCards={posts} />
      </div>
    </main>
  );
};

export default MainContent;
