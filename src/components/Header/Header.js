import React from 'react'
import PropTypes from 'prop-types';
import './Header.css'
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';



const Header = (props) => {

    let navitem = ['Binary', 'QRcode', 'Speech To Text'] //data



    return (
        <>
                <nav className='h-16 fixed bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900  w-full z-10 top-0'>
                    <div className='container flex flex-wrap items-center justify-between mx-auto'>
                        <Link to='/' className='flex items-center'>
                            <span className='self-center text-3xl whitespace-nowrap dark:text-white logo'>{props.logo}</span>
                        </Link>
                        <div className='flex md:order-2'>
                            <DarkModeToggle />
                            <button data-collapse-toggle='navbar-cta' type='button' className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-cta' aria-expanded='false'>
                                <span className='sr-only'>Open main menu</span>
                                <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
                            </button>
                        </div>
                        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-cta'>
                            <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>

                                <li><Link to='/' className='block py-2 pl-3 pr-4 text-gray-600 rounded md:bg-transparent md:p-0 dark:text-white capitalize' aria-current='page'>Home</Link></li>
                                {
                                    navitem?.map(menu => (
                                        <li><Link to={`/${menu.replace(/\s/g, '').toLowerCase()}`} className='block py-2 pl-3 pr-4 text-gray-600 rounded md:bg-transparent md:p-0 dark:text-white capitalize' aria-current='page'>{menu}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}
Header.ProtoTypes = {
    logo: PropTypes.string.isRequired,
    nav1: PropTypes.string.isRequired,
    na2: PropTypes.string,
    nav3: PropTypes.string
}

Header.defaultProps = {
    logo: 'Add Title',
    nav1: 'Add nav1',
    nav2: 'Add nav2',
    nav3: 'Add nav2'
}

export default Header
