import './App.css';
import React, { useEffect, useState } from "react"
import From from './components/Form/Form';
import Header from './components/Header/Header';
import Alert from './components/Alert/Alert';

function App() {
  
  return (
    <>
      <Header logo="TextUtils" home ="Home" about="About" services="Services" contact="Contact Us" />
      <Alert />
      <From heading='Enter the text to analyze' />
    </>
  );
}

export default App;
