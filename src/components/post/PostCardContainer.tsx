import React from 'react';
import PostCard from './PostCard';
import { PostCardContainerProps } from '../../types/Post';

const PostCardContainer: React.FC<PostCardContainerProps> = ({ postCards }) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-grow overflow-y-auto scrollbar-hide">
        {postCards.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostCardContainer;
