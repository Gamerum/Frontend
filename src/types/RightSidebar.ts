export interface PopularGamesProps {
  popularGames: {
    id: string;
    image: string;
    communityCount: number;
  }[];
}

export interface PopularCommunitiesProps {
  popularCommunities: {
    id: string;
    name: string;
    memberCount: number;
    image: string;
  }[];
}

export interface PopularSliderProps {
  popularCommunities: PopularCommunitiesProps['popularCommunities'];
  popularGames: PopularGamesProps['popularGames'];
}
