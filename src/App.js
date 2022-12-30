import './App.css';
import React, { useEffect, useState } from "react"
import From from './components/Form/Form';
import Header from './components/Header/Header';
import Alert from './components/Alert/Alert';

function App() {
  const [theme, setTheme] = useState(null);

    useEffect(() => {
      if (localStorage.getItem("mode")==="dark") {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ){
          setTheme('dark');
          localStorage.setItem("mode", "dark");
          
        } else {
          setTheme('light');
          localStorage.setItem("mode", "Light");
        }
      }else{
        setTheme('light');
        localStorage.setItem("mode", "Light");
      }
    }, [])

    useEffect(() => {
      if (theme === 'dark') {
        localStorage.setItem("mode", "dark");
        document.body.classList.add('dark');
      } else {
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
      <Header logo="TextUtils" home ="Home" about="About" services="Services" contact="Contact Us" mode={theme} toggleDarkMode={toggleDarkMode}/>
      <Alert />
      <From heading='Enter the text to analyze' />
    </>
  );
}

export default App;
