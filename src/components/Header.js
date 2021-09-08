import React from 'react';

const Header = () => (
  <>
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <span className="text-2xl pl-2">Stach House Auchan</span>
          </a>
        </div>
      </nav>
    </header>
  </>
);

export default Header;
