import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


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
              <button id='theme-toggle' type='button' onClick={props.toggleDarkMode} className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5'>
                {props.theme === 'dark' ? <svg id='light-icon' className='0 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' fillRule='evenodd' clipRule='evenodd' /></svg> : <svg id='dark-icon' className=' w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' /></svg>}

              </button>
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
  nav3: 'Add nav2'
}

export default Navbar;