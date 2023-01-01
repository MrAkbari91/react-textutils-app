import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import "./Header.css"
import '../style.css';
// import 'flowbite';


const Header = (props) => {

    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // Toggle Menu
    const [Mobile, setMobile] = useState(false)

    const [theme, setTheme] = useState(null);

    const getTheme = () =>{
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // // if NOT set via local storage previously
     

    useEffect(() => {
        if(localStorage.getItem("dark")){
            if (localStorage.getItem("dark")===true) {
                console.log("local dark");
                localStorage.setItem("dark","false");
                document.body.classList.add('dark'); 
                setTheme('dark');
            }else{
                setTheme('light');
                console.log("local light");
            }
        }else{
            if (getTheme) {
                console.log("theme light");
                document.body.classList.remove('dark');
                localStorage.setItem("dark","false");
                setTheme('light');
            }else{
                document.body.classList.add('dark');
                console.log("theme dark");
                setTheme('dark');
                localStorage.setItem("dark","true");
            }
        }
        // if (localStorage.getItem('mode')) {
        //     if (localStorage.getItem('mode') === 'light') {
        //         document.body.classList.add('dark');
        //         localStorage.setItem('mode', 'dark');
        //         setTheme('dark');
        //     } else {
        //         document.body.classList.remove('dark');
        //         localStorage.setItem('mode', 'light');
        //         setTheme('light');
        //     }
        // }else {
        //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //         document.body.classList.add('dark');
        //         localStorage.setItem('mode', 'dark');
        //         setTheme('dark');
        //     } else {
        //         document.body.classList.remove('dark');
        //         localStorage.setItem('mode', 'light');
        //         setTheme('light');

        //     }
        // }

        // if (localStorage.getItem("mode") === "dark") {
        //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //         setTheme('dark');
        //         localStorage.setItem("mode", "dark");

        //     } else {
        //         localStorage.setItem("mode", "Light");
        //     }
        // } else {
        //     setTheme('light');
        //     localStorage.setItem("mode", "Light");
        // }
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            setTheme('dark');
            console.log("theme changed dark");
            console.log(theme === 'dark');
            localStorage.setItem("mode", "dark");
            document.body.classList.add('dark');
        } else {
            setTheme('light ');
            console.log(theme === 'dark');
            console.log("theme changed light");
            localStorage.setItem("mode", "Light");
            document.body.classList.remove('dark');
        }
        // console.log(localStorage.getItem("mode"));
    }, [theme])

    const toggleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');

    }




    return (
        <>
            <header className='h-[65px] flex items-center justify-between px-5 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
                <div className='logo'>
                    <a href="/" className="text-3xl dark:text-white">{props.logo}</a>
                </div>

                <div className='navlink flex'>
                    <ul className={Mobile ? "nav-links-mobile dark:bg-gray-900 bg-white" : "link flex items-center"} onClick={() => setMobile(false)}>
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
                        {/*<li>
                        <label className="flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" onClick={props.toggleDarkMode} className="sr-only peer" {...props.theme==="dark"?'checked':''} />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                        </li> */}
                        {/* <li>
                            <button className="dark:text-white text-black" onClick={props.toggleDarkMode}>
                                <i className="fa fa-sun"></i>
                            </button>
                        </li> */}
                        <li>
                            <button id="theme-toggle" type="button" onClick={toggleDarkMode} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                                {theme === 'dark' ? <svg id="light-icon" className='0 w-5 h-5' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg> : <svg id="dark-icon" className=' w-5 h-5' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>}

                            </button>
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
