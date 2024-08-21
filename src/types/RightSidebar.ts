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
