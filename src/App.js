import React from 'react';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import LandingPageBottom from './components/LandingPageBottom';

const App = () => (
  <div className="App">
    <Navbar />
    <LandingPage />
    <LandingPageBottom />
  </div>
);

export default App;
