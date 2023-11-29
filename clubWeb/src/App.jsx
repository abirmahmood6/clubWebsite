// src/App.jsx

import React from 'react';
import HomePage from './components/homePage'
import AboutPage from './components/aboutPage';
import NewsAndUpdate from './components/newsAndUpdate';
import Contact from './components/contact';
import EventPage from './components/eventPage';
import Navbar from './components/navbar';


const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <HomePage/>
      <AboutPage/>
      <NewsAndUpdate/>
      <EventPage/>
      <Contact/>
    

      
    </div>
  );
};

export default App;