interface PopularGame {
  id: number;
  image: string;
  communityCount: number;
}

export interface PopularGamesProps {
  popularGames: PopularGame[];
}
