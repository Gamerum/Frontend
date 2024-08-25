import React, { useState, useRef } from 'react';
import { useUpdateEffect } from 'primereact/hooks';
import { defaultPostCardProps } from '../../types/Post';
import PostCardContainer from '../../components/post/PostCardContainer';
import logo from '../../assets/logo.png';
import { SortProvider, useSort } from '../../contexts/SortContext';
import { ScrollableProvider } from '../../contexts/ScrollableContext';
import TagTabMenu from '../../components/TagTabMenu';
import PostCardContainerMenu from '../../components/post/PostCardContainerMenu';

const MainContent: React.FC = () => {
  const [postCards] = useState([
    defaultPostCardProps,
    { ...defaultPostCardProps, id: '1', image: logo },
    { ...defaultPostCardProps, id: '2' },
  ]);

  const scrollableParentRef = useRef(null);

  const { sortOption } = useSort();

  useUpdateEffect(() => {
    const fetchPosts = async () => {
      console.log(sortOption);
    };

    fetchPosts();
  }, [sortOption]);

  return (
    <ScrollableProvider value={scrollableParentRef}>
      <main
        ref={scrollableParentRef}
        className="flex flex-1 flex-col p-4  min-w-[16rem] sm:min-w-[20rem] md:min-w-[28rem]"
      >
        <PostCardContainerMenu sortMenu tagTabMenu />
        <div className="overflow-y-auto scrollbar-hide">
          <PostCardContainer postCards={postCards} />
        </div>
      </main>
    </ScrollableProvider>
  );
};

const MainContentWithProvider: React.FC = () => (
  <SortProvider>
    <MainContent />
  </SortProvider>
);

export default MainContentWithProvider;
