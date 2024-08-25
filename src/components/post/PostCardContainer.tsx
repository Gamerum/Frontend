import React from 'react';
import PostCard from './PostCard';
import { PostCardContainerProps } from '../../types/Post';

const PostCardContainer: React.FC<PostCardContainerProps> = ({ postCards }) => {
  return (
    <div className="flex-grow space-y-4">
      {postCards.map((post) => (
        <PostCard key={post.id} bgColor="bg-zinc-900" {...post} />
      ))}
    </div>
  );
};

export default PostCardContainer;
