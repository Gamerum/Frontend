import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MdDehaze } from 'react-icons/md';
import Search from '../components/Search';
import Profile from '../components/Profile';

function Header() {
  return (
    <header className="relative z-50 bg-transparent py-1 border-b border-main-100/20">
      <div className="container flex select-none items-center justify-between">
        <div className="flex items-center space-x-3">
          <button>
            <MdDehaze
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
        <div className="">
          <Search />
        </div>

        <div>
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
