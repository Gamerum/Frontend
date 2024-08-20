import React, { useState } from 'react';
import { useUpdateEffect } from 'primereact/hooks';
import { defaultPostCardProps } from '../types/Post';
import PostCardContainer from '../components/post/PostCardContainer';
import PostCardContainerMenu from '../components/post/PostCardContainerMenu';
import logo from '../assets/logo.png';
import { SortProvider, useSort } from '../contexts/SortContext';

const MainContent: React.FC = () => {
  const [posts, setPosts] = useState([
    defaultPostCardProps,
    { ...defaultPostCardProps, id: 1, image: logo },
    { ...defaultPostCardProps, id: 2 },
  ]);
  const { sortOption } = useSort();

  useUpdateEffect(() => {
    const fetchPosts = async () => {
      console.log(sortOption);
    };

    fetchPosts();
  }, [sortOption]);

  return (
    <main className="flex flex-1 flex-col p-4 ml-10 mr-10">
      <PostCardContainerMenu />
      <PostCardContainer postCards={posts} />
    </main>
  );
};

const MainContentWithProvider: React.FC = () => (
  <SortProvider>
    <MainContent />
  </SortProvider>
);

export default MainContentWithProvider;
