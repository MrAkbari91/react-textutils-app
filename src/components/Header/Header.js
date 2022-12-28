import React, { useState } from "react"
import '../style.css';
import PropTypes from 'prop-types';
import "./Header.css"

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
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <a href="#" className="text-3xl">{props.logo}</a>
                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex"} onClick={() => setMobile(false)}>
                            <li>
                                <a href='#home'>{props.home}</a>
                            </li>
                            <li>
                                <a href='#features'>{props.about}</a>
                            </li>
                            <li>
                                <a href='#contact'>{props.contact}</a>
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fa fa-times close home-btn'></i> : <i className='fa fa-bars open home-btn'></i>}
                        </button>
                    </div>
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
    logo:'Add Title',
    home: "Add nav1",
    about: "Add nav2",
    contact: "Add nav2"
}

export default Header
