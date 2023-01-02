import './App.css';
import React, { useEffect, useState } from "react"
import From from './components/Form/Form';
import Header from './components/Header/Header';
import Alert from './components/Alert/Alert';
import Navbar from './components/Header/Navbar';

function App() {
  const [theme, setTheme] = useState(null)

  const toggleDarkMode = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        setTheme('light');
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        setTheme('light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setTheme('dark');
      }
    }
  }
  useEffect(() => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    }
  }, [])


  return (
    <>
      <Header logo="TextUtils" home="Home" about="About" services="Services" contact="Contact Us" />
      {/* <Alert /> */}
      <From heading='Enter the text to analyze' />
    </>
  );
}

export default App;
