import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './Header.css'
import { Link } from 'react-router-dom';
import { MdDehaze, MdClose } from 'react-icons/md';


const Header = (props) => {

    // fixed Header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header')
        header.classList.toggle('active', window.scrollY > 100)
    })
    // Toggle Menu
    const [Mobile, setMobile] = useState(false)


    return (
        <>
            <header className='h-16 flex items-center justify-between px-5 dark:bg-gray-900 bg-gray-100 dark:border-gray-700 border-gray-200'>
                <div className='logo'>
                    <Link href='/' className='text-3xl dark:text-white'>{props.logo}</Link>
                </div>

                <div className='navlink flex'>
                    <ul className={Mobile ? 'nav-links-mobile dark:bg-gray-900 bg-white' : 'link flex items-center'} onClick={() => setMobile(false)}>
                        <li>
                            <Link to='/' className='dark:text-white'>{props.nav1}</Link>
                        </li>
                        <li>
                            <Link to='/binary' className='dark:text-white'>{props.nav2}</Link>
                        </li>
                        <li>
                            <Link to='/qrcode' className='dark:text-white'>{props.nav3}</Link>
                        </li>
                        <li>

                        </li>
                    </ul>
                    <button id='theme-toggle' type='button' onClick={props.toggleDarkMode} className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5'>
                        {props.theme === 'dark' ? <svg id='light-icon' className='0 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' fillRule='evenodd' clipRule='evenodd' /></svg> : <svg id='dark-icon' className=' w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' /></svg>}
                    </button>
                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <span className='fa fa-times close home-btn'><MdClose /></span> : <span className='fa fa-bars open home-btn'><MdDehaze /></span>}
                    </button>
                </div>
            </header>
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
