import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CiSearch, CiMenuBurger, CiCircleChevLeft } from 'react-icons/ci';

import Search from '../components/Search';
import Profile from '../components/Profile';
import Notification from '../components/Notification';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="relative z-50 bg-transparent py-1 border-b border-main-100/20">
      <div className="container flex items-center justify-between select-none space-x-3">
        {!isSearchOpen ? (
          <>
            <div className="flex w-max items-center space-x-3">
              <button>
                <CiMenuBurger
                  className="flex-shrink-0 h-6 w-6 text-main-250"
                  height={24}
                  width={24}
                />
              </button>

              <Link to={'/'} aria-label="Home">
                <img
                  src={logo}
                  alt="Gamerum"
                  className="flex w-[170px] items-center justify-center xs:w-[150px]"
                />
              </Link>
            </div>

            <div className="flex-grow max-w-fit md:max-w-xl lg:max-w-3xl hidden md:block">
              <Search />
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="block md:hidden text-main-250"
              >
                <CiSearch className="h-6 w-6" />
              </button>
              <Notification />
              <Profile />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between w-full space-x-2  py-4">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-main-250 hover:text-main-550 transition ease-in-out duration-300"
            >
              <CiCircleChevLeft className="h-10 w-10" />
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
