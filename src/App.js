import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import vid from './video.mp4'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About/About.js'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

      <video
        className="vid"
        autoPlay
        loop
        muted
        >
          <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
