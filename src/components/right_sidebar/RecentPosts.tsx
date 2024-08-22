import React from 'react';
import PostCard from '../post/PostCard';
import { PostCardContainerProps } from '../../types/Post';

const RecentPosts: React.FC<PostCardContainerProps> = ({ postCards }) => {
  return (
    <div className="recent-posts-panel w-full p-2 shadow-2xl overflow-hidden mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        Recently Viewed Posts
      </h2>
      <div className="space-y-4 overflow-y-auto max-h-[20rem] scrollbar-hide">
        {postCards.map((post) => (
          <PostCard
            key={post.id}
            bgColor="bg-main-800"
            titleSize="text-sm"
            {...post}
            image={undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
