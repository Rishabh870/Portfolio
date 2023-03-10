import React from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Service from './Components/Service';
import Work from './Components/Work';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Navigation />
      <About />
      <Service />
      {/* <Work /> */}
      <Contact />
    </div>
  );
}

export default App;
