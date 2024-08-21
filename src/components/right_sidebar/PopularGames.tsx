import { PopularGamesProps } from '../../types/RightSidebar';
import { formatNumber } from '../../utils/numberFormatter';
import { Card } from 'primereact/card';

const PopularGames: React.FC<PopularGamesProps> = ({ popularGames }) => {
  return (
    <div className="popular-games mb-4">
      <h2 className="text-xl font-bold mb-5 text-white">Popular Games</h2>
      <div className="flex space-x-4">
        {popularGames.map((game) => (
          <div key={game.id} className="relative w-32 h-40 group">
            <Card
              className="relative w-full h-full p-0 overflow-hidden transition-transform duration-300"
              style={{
                backgroundImage: `url(${game.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 flex flex-col justify-center items-center">
                <span className="text-sm font-bold text-white">
                  {formatNumber(game.communityCount)}
                </span>
                <span className="text-xs text-gray-300">Communities</span>
              </div>
            </Card>

            {/* Glow Effect */}
            <div className="absolute inset-0 transition-shadow duration-300 group-hover:shadow-[0_0px_30px_-5px_rgba(255,255,255,0.7)]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
