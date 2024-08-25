import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import PopularCommunities from './PopularCommunities';
import PopularGames from './PopularGames';
import { PopularSliderProps } from '../../types/RightSidebar';

const PopularSlider: React.FC<PopularSliderProps> = ({
  popularCommunities,
  popularGames,
}) => {
  return (
    <div className="slider-container">
      <Splide
        options={{
          type: 'fade',
          height: '100%',
          pagination: false,
          arrows: false,
          autoplay: true,
          interval: 3000,
          lazyLoad: true,
          rewind: true,
        }}
      >
        <SplideSlide className="p-2">
          <PopularGames popularGames={popularGames} />
        </SplideSlide>
        <SplideSlide className="p-2">
          <PopularCommunities popularCommunities={popularCommunities} />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default PopularSlider;
