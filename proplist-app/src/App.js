import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Locations from './components/Locations';
import About from './components/About';
import Contacts from './components/Contacts';
import ListItems from './components/ListItems';
import Picture from './Picture.png'
import './App.css'

function App() {
  return (
    <div className="mainBody">
      <Navbar />
      <HomePage />
      <ListItems/>
      <Locations />
      <img src={Picture} alt="My Picture" />
      <About />
      <Contacts />
    </div>
  );
}

export default App;

