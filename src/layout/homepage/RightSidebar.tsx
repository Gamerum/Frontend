import React from 'react';
import PopularSlider from '../../components/right_sidebar/homepage/PopularSlider';
import wow from '../../assets/wow.png';
import RecentPosts from '../../components/right_sidebar/homepage/RecentPosts';
import { defaultPostCardProps } from '../../contexts/PostCardContext';

const RightSidebar: React.FC = () => {
  const tempPopularGames = [
    {
      id: '1',
      image:
        'https://static.wikia.nocookie.net/wowpedia/images/6/60/WoW-boxcover.jpg/revision/latest/scale-to-width-down/250?cb=20190228164118',
      communityCount: 100000000,
    },
    {
      id: '2',
      image: wow,
      communityCount: 100000000,
    },
    {
      id: '3',
      image:
        'https://static.wikia.nocookie.net/wowpedia/images/6/60/WoW-boxcover.jpg/revision/latest/scale-to-width-down/250?cb=20190228164118',
      communityCount: 100000000,
    },
  ];

  const popularCommunities = [
    {
      id: '1',
      name: 'Gamer Hub',
      memberCount: 1500,
      image: 'https://via.placeholder.com/150?text=Gamer+Hub',
    },
    {
      id: '2',
      name: 'Tech Enthusiasts',
      memberCount: 1200,
      image: 'https://via.placeholder.com/150?text=Tech+Enthusiasts',
    },
    {
      id: '3',
      name: 'Anime Lovers',
      memberCount: 980,
      image: 'https://via.placeholder.com/150?text=Anime+Lovers',
    },
    {
      id: '4',
      name: 'Fitness Freaks',
      memberCount: 850,
      image: 'https://via.placeholder.com/150?text=Fitness+Freaks',
    },
    {
      id: '5',
      name: 'Movie Buffs',
      memberCount: 720,
      image: 'https://via.placeholder.com/150?text=Movie+Buffs',
    },
  ];

  const postCards = [
    defaultPostCardProps,
    { ...defaultPostCardProps, id: '1' },
    { ...defaultPostCardProps, id: '2' },
  ];

  return (
    <aside className="w-[27rem] p-4 bg-zinc-900 h-full flex-col hidden md:flex overflow-visible">
      <PopularSlider
        popularCommunities={popularCommunities}
        popularGames={tempPopularGames}
      />
      <RecentPosts postCards={postCards} />
    </aside>
  );
};

export default RightSidebar;
