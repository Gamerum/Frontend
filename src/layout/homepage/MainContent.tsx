import React, { useState, useRef } from 'react';
import { useUpdateEffect } from 'primereact/hooks';
import { defaultPostCardProps } from '../../types/Post';
import PostCardContainer from '../../components/post/PostCardContainer';
import PostCardContainerMenu from '../../components/post/PostCardContainerMenu';
import logo from '../../assets/logo.png';
import { SortProvider, useSort } from '../../contexts/SortContext';
import { ScrollableProvider } from '../../contexts/ScrollableContext';

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
        className="flex flex-1 flex-col p-4 overflow-y-auto scrollbar-hide min-w-[16rem] sm:min-w-[20rem] md:min-w-[28rem]"
      >
        <PostCardContainerMenu sortMenu />
        <PostCardContainer postCards={postCards} />
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
