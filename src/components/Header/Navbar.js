import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import DarkModeToggle from './DarkModeToggle';



function Navbar(props) {
  return (

    <nav className='px-2 bg-gray-100 border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link to='/' className='flex items-center logo'>
          <span className='self-center text-3xl whitespace-nowrap dark:text-white'>{props.logo}</span>
        </Link>
        <button data-collapse-toggle='navbar-dropdown' type='button' className='inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-dropdown' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd'></path></svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-dropdown'>
          <ul className='flex items-center flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link to='/' className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent' aria-current='page'>{props.nav1}</Link>
            </li>

            <li>
              <Link to='/binary' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>{props.nav2}</Link>
            </li>
            <li>
              <Link to='/qrcode' className='block py-2 pl-3 space-x-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>{props.nav3}</Link>
            </li>
            <li>
              {/* <DarkModeToggle /> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
Navbar.ProtoTypes = {
  logo: PropTypes.string.isRequired,
  nav1: PropTypes.string.isRequired,
  na2: PropTypes.string,
  nav3: PropTypes.string
}

Navbar.defaultProps = {
  logo: 'Add Title',
  nav1: 'Add nav1',
  nav2: 'Add nav2',
  nav3: 'Add nav3'
}

export default Navbar;