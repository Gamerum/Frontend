import React, { useRef } from 'react';
import PostCard from '../post/PostCard';
import { PostCardContainerProps } from '../../types/Post';
import { useTranslation } from 'react-i18next';
import { ScrollableProvider } from '../../contexts/ScrollableContext';

const RecentPosts: React.FC<PostCardContainerProps> = ({ postCards }) => {
  const { t } = useTranslation();
  const scrollableParentRef = useRef(null);

  return (
    <ScrollableProvider value={scrollableParentRef}>
      <div className="recent-posts-panel w-full p-2 shadow-2xl overflow-hidden mt-6">
        <h2 className="text-xl font-bold text-white mb-4">
          {t('recently_viewed_posts')}
        </h2>
        <div
          ref={scrollableParentRef}
          className="space-y-4 overflow-y-auto max-h-[20rem] scrollbar-hide"
        >
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
    </ScrollableProvider>
  );
};

export default RecentPosts;
