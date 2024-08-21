import React from 'react';
import PopularGames from '../components/right_sidebar/PopularGames';
import wow from '../assets/wow.png';

const RightSidebar: React.FC = () => {
  const tempPopularGames = [
    {
      id: 1,
      image:
        'https://static.wikia.nocookie.net/wowpedia/images/6/60/WoW-boxcover.jpg/revision/latest/scale-to-width-down/250?cb=20190228164118',
      communityCount: 100000000,
    },
    {
      id: 2,
      image: wow,
      communityCount: 100000000,
    },
    {
      id: 3,
      image:
        'https://static.wikia.nocookie.net/wowpedia/images/6/60/WoW-boxcover.jpg/revision/latest/scale-to-width-down/250?cb=20190228164118',
      communityCount: 100000000,
    },
  ];
  return (
    <aside className="w-auto p-4 bg-zinc-900 h-full flex-col hidden md:flex">
      <PopularGames popularGames={tempPopularGames} />
    </aside>
  );
};

export default RightSidebar;
