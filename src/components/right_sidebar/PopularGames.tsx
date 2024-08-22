import { PopularGamesProps } from '../../types/RightSidebar';
import { formatNumber } from '../../utils/numberFormatter';
import { Card } from 'primereact/card';
import { getCommunitySearchViaGame } from '../../utils/urlUtils';

const PopularGames: React.FC<PopularGamesProps> = ({ popularGames }) => {
  return (
    <div className="popular-games mb-4">
      <h2 className="text-xl font-bold mb-5 text-white">Popular Games</h2>
      <div className="flex space-x-4">
        {popularGames.map((game) => (
          <a
            key={game.id}
            className="relative w-32 h-44 group"
            href={getCommunitySearchViaGame(game.id)}
          >
            <Card
              className="relative w-full h-full p-0 overflow-hidden transition-transform duration-300 shadow-lg"
              style={{
                backgroundImage: `url(${game.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-2 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-800 to-transparent opacity-100 filter blur-xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-sm font-bold text-white mb-1">
                    {formatNumber(game.communityCount)}
                  </span>
                  <span className="text-xs text-gray-200">Communities</span>
                </div>
              </div>
            </Card>

            {/* Glow Effect */}
            <div className="absolute inset-0 transition-shadow duration-300 group-hover:shadow-[0_0px_10px_1px_rgba(59,130,246,1)]"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
