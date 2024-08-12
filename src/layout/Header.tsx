import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MdClear, MdDehaze } from 'react-icons/md';
function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    console.log(isMobileMenu);
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <header className="relative z-50 bg-transparent py-1 border-b border-main-100/20">
      <div className="container flex select-none items-center justify-between">
        <div>
          <Link to={'/'} aria-label="Home">
            <img
              src={logo}
              alt="Gamerum"
              className="flex w-[170px] items-center justify-center xs:w-[150px]"
            />
          </Link>
        </div>
        <div
          onClick={toggleMobileMenu}
          className="p-2 border rounded-md text-main-550/50 border-main-550/50 hover:text-main-550 hover:border-main-550 duration-300 transition ease-in-out"
        >
          {!isMobileMenu ? (
            <>
              <MdDehaze
                className="flex-shrink-0 scale-x-[-1]"
                height={24}
                width={24}
              />
            </>
          ) : (
            <>
              <MdClear
                className="flex-shrink-0 scale-x-[-1]"
                height={24}
                width={24}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
