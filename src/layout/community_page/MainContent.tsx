import React, { useState, useRef } from 'react';
import { useUpdateEffect } from 'primereact/hooks';
import { defaultPostCardProps } from '../../types/Post';
import PostCardContainer from '../../components/post/PostCardContainer';
import logo from '../../assets/logo.png';
import bg3 from '../../assets/bg3.jpeg';
import karlach from '../../assets/karlach.jpg';
import { SortProvider, useSort } from '../../contexts/SortContext';
import { ScrollableProvider } from '../../contexts/ScrollableContext';
import PostCardContainerMenu from '../../components/post/PostCardContainerMenu';
import CommunityHeader from '../../components/community/CommunityHeader';

const MainContent: React.FC = () => {
  const [postCards] = useState([
    defaultPostCardProps,
    { ...defaultPostCardProps, id: '1', image: logo },
    { ...defaultPostCardProps, id: '2' },
  ]);

  const communityData = {
    backgroundImage: bg3,
    photo: karlach,
    title: 'Community Title',
    description: 'This is a description of the community.',
  };

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
        className="flex flex-1 flex-col p-4 min-w-[16rem] sm:min-w-[20rem] md:min-w-[28rem]"
      >
        <CommunityHeader community={communityData} />
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
