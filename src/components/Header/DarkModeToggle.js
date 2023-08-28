import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from "react-icons/fa6";


const DarkModeToggle = (props) => {
    const [theme, setTheme] = useState(null);

    const toggleDarkMode = () => {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setTheme('dark');
                props.showAlert('dark mode enable');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setTheme('light');
                props.showAlert('light mode enable');
            }
            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setTheme('light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setTheme('dark');
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        }
    }, [])
    return (
        <>
            <button id='theme-toggle' type='button' onClick={toggleDarkMode}
                className='ml-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg p-2.5'>
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </button>
        </>
    )
}

export default DarkModeToggle;
