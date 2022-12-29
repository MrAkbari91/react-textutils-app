import React, { useState } from "react"
import PropTypes from 'prop-types';
import "./Header.css"
import '../style.css';

const Header = (props) => {
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)

    return (
        <>
            <header className='h-[65px] flex items-center justify-between px-5 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
                <div className='logo'>
                    <a href="/" className="text-3xl dark:text-white">{props.logo}</a>
                </div>

                <div className='navlink flex'>
                    <ul className={Mobile ? "nav-links-mobile dark:bg-gray-900 bg-white" : "link flex "} onClick={() => setMobile(false)}>
                        <li>
                            <a href='#home' className="dark:text-white">{props.home}</a>
                        </li>
                        <li>
                            <a href='#features' className="dark:text-white">{props.about}</a>
                        </li>
                        <li>
                            <a href='#features' className="dark:text-white">{props.services}</a>
                        </li>
                        <li>
                            <a href='#contact' className="dark:text-white">{props.contact}</a>
                        </li>
                    </ul>

                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fa fa-times close home-btn'></i> : <i className='fa fa-bars open home-btn'></i>}
                    </button>



                </div>
            </header>
        </>
    )
}
Header.ProtoTypes = {
    logo: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string,
    contact: PropTypes.string
}

Header.defaultProps = {
    logo: 'Add Title',
    home: "Add nav1",
    about: "Add nav2",
    contact: "Add nav2"
}

export default Header
