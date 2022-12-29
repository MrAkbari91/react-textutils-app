import './App.css';
import From from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header logo="TextUtils" home ="Home" about="About" services="Services" contact="Contact Us"/>
      <From heading='Enter the text to analyze' />
    </>
  );
}

export default App;
