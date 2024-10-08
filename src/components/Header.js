import React, { useContext, useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FiBell } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import ytLogo from '../components/images/yt-logo.png';
import { Context } from '../context/contextApi';
import Loader from '../components/shared/Loader';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageName = pathname.split('/').filter(Boolean)[0];

  const searchQueryHandler = (event) => {
    if ((event?.key === 'Enter' || event === 'searchButton') && searchQuery.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black'>
      {loading && <Loader />}

      <div className='flex h-5 items-center'>
        {pageName !== 'video' && (
          <div
            className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? <CgClose className='text-white text-xl' /> : <SlMenu className='text-white text-xl' />}
          </div>
        )}
        <Link to='/' className='flex h-5 items-center px-2'>
          <img className='h-full dark:md:block' src={ytLogo} alt='youtube' />
        </Link>
      </div>

      <div className='group flex items-center'>
        <div className='w-10 h-8 md:h-10 border border-[#303030] items-center justify-center hidden group-focus-within:md:flex'>
          <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
            <IoIosSearch className='text-white text-xl' />
          </div>
        </div>

        <div className='flex items-center bg-gray-800 rounded-full'>
          <input
            type='text'
            className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-2 w-44 md:w-64 lg:w-[500px] rounded-l-full'
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && searchQueryHandler(e)}
            placeholder='Search'
            value={searchQuery}
          />
          <button
            className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-full bg-white/[0.1] hover:bg-white/[0.2]'
            onClick={() => searchQueryHandler('searchButton')}
          >
            <IoIosSearch className='text-white text-xl' />
          </button>
        </div>

        <div className='flex items-center'>
          <div className='hidden md:flex'>
            <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
              <RiVideoAddLine className='text-white text-xl cursor-pointer' />
            </div>
            <div className='flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
              <FiBell className='text-white text-xl cursor-pointer' />
            </div>
          </div>
          <div className='flex h-8 w-8 overflow-hidden rounded-full md:ml-4'>
            <img src='https://xsgames.co/randomusers/assets/avatars/female/67.jpg' alt='randomImg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
