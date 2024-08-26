import React, { useState, useRef } from 'react';
import { useMountEffect, useUpdateEffect } from 'primereact/hooks';
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
    defaultPostCardProps,
    { ...defaultPostCardProps, id: '3', image: logo },
    { ...defaultPostCardProps, id: '4' },
    defaultPostCardProps,
    { ...defaultPostCardProps, id: '5', image: logo },
    { ...defaultPostCardProps, id: '6' },
    defaultPostCardProps,
    { ...defaultPostCardProps, id: '7', image: logo },
    { ...defaultPostCardProps, id: '8' },
    defaultPostCardProps,
    { ...defaultPostCardProps, id: '9', image: logo },
    { ...defaultPostCardProps, id: '10' },
  ]);

  const communityData = {
    backgroundImage: bg3,
    photo: karlach,
    title: 'Community Title',
    description: 'This is a description of the community.',
  };

  const maxHeaderHeight = 300;
  const [headerHeight, setHeaderHeight] = useState<number>(maxHeaderHeight);
  const scrollableParentRef = useRef<HTMLDivElement>(null);
  const { sortOption } = useSort();

  useUpdateEffect(() => {
    const fetchPosts = async () => {
      console.log(sortOption);
    };

    fetchPosts();
  }, [sortOption]);

  useMountEffect(() => {
    const handleScroll = () => {
      if (scrollableParentRef.current) {
        const scrollTop = scrollableParentRef.current.scrollTop;
        const newHeight = Math.max(0, headerHeight - scrollTop);
        setHeaderHeight(newHeight);
      }
    };

    scrollableParentRef.current?.addEventListener('scroll', handleScroll);
  });

  return (
    <ScrollableProvider value={scrollableParentRef}>
      <main className="flex flex-1 flex-col p-4 min-w-[16rem] sm:min-w-[20rem] md:min-w-[28rem]">
        <div
          style={{
            opacity: `${(headerHeight / maxHeaderHeight) * 100}%`,
            height: `${headerHeight}px`,
            overflow: 'hidden',
          }}
          className="flex flex-1 mb-0"
        >
          <CommunityHeader community={communityData} />
        </div>
        <PostCardContainerMenu sortMenu tagTabMenu />
        <div
          ref={scrollableParentRef}
          className="overflow-y-auto scrollbar-hide"
          style={{
            maxHeight: `${maxHeaderHeight - headerHeight + 384}px`,
          }}
        >
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
