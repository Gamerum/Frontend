import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import Search from '../components/Search';
import Profile from '../components/Profile';
import Notification from '../components/Notification';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="relative z-50 bg-transparent py-1 px-3 border-b border-main-100/20">
      <div className="flex items-center justify-between select-none space-x-3">
        {!isSearchOpen ? (
          <>
            <div className="flex w-max items-center space-x-3">
              <button>
                <i className="pi pi-bars header-buttons"></i>
              </button>

              <Link to={'/'} aria-label="Home">
                <img
                  src={logo}
                  alt="Gamerum"
                  className="flex w-[170px] items-center justify-center xs:w-[150px]"
                />
              </Link>
            </div>

            {!isSmallScreen && (
              <div className="flex-grow max-w-fit md:max-w-xl lg:max-w-3xl hidden md:block">
                <Search />
              </div>
            )}

            <div className="flex items-center justify-between gap-2 space-x-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="block md:hidden text-main-250"
              >
                <i className="pi pi-search header-buttons"></i>
              </button>
              <Link to="/create">
                <i className="pi pi-plus header-buttons"></i>
              </Link>
              <Notification />
              <Profile />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between w-full space-x-2 py-4">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-secondary-300 border border-secondary-350 hover:border-main-550 rounded-full flex items-center  p-2 hover:text-main-550 transition ease-in-out duration-300"
            >
              <i className="pi pi-chevron-left "></i>
            </button>
            <div className="w-full">
              <Search />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
