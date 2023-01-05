import './App.css';
import './components/style.css';
import React, { useState, useEffect } from 'react'
import From from './components/Form/Form';
import Header from './components/Header/Header';
import Alert from './components/Alert/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Binary from './components/Binary-text/Binary';
import PageError from './components/PageNotFound/PageError';
import Footer from './components/Footer/Footer';
import QRcode from './components/Qrcode/QRcode';

function App() {
  const [theme, setTheme] = useState(null)

  const toggleDarkMode = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setTheme('dark');
        showAlert('dark mode enable');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        setTheme('light');
        showAlert('light mode enable');
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

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  return (
    <Router>
      <div className='dark:bg-gray-700 dark:text-gray-100'>
        <Header logo='TextUtils' nav1='Home' nav2='Binary' nav3='QRcode' nav4='Contact Us' showAlert={showAlert} theme={theme} toggleDarkMode={toggleDarkMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path='/' element={<From heading='Enter the text to analyze' showAlert={showAlert} />}></Route>
          <Route exact path='/binary' element={<Binary heading='convert text to binary' showAlert={showAlert} />}></Route>
          <Route exact path='/qrcode' element={<QRcode heading='convert text to QRcode' />}></Route>
          <Route path='*' element={<PageError />}></Route>
        </Routes>

        <Footer logo='TextUtils' nav1='Home' nav2='Binary' nav3='QRcode' />
      </div>
    </Router>
  );
}

export default App;
