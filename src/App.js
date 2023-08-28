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
import SpeechToText from './components/SpeechToText/SpeechToText';

function App() {

  const logo = 'TextConvert';
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 50000);
  }
  return (
    <Router>
      <div className='dark:bg-gray-700 dark:text-gray-100'>
        <Header logo={logo} showAlert={showAlert} />
        <Alert alert={alert} />
        <div className='container my-8 pt-8'>

          <Routes>
            <Route exact path='/' element={<From heading='Enter the text to analyze' showAlert={showAlert} />}></Route>
            <Route exact path='/binary' element={<Binary heading='convert text to binary' showAlert={showAlert} />}></Route>
            <Route exact path='/qrcode' element={<QRcode heading='convert text to QRcode' />}></Route>
            <Route exact path='/speechtotext' element={<SpeechToText heading='Speech to text conversion' />}></Route>
            <Route path='*' element={<PageError />}></Route>
          </Routes>
        </div>

        <Footer logo={logo} />
      </div>
    </Router>
  );
}

export default App;