import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, About, Skills, Projects, Contact, Footer } from '../index';
import './ScrollLayout.scss';

// Alternate Layout for scrolling on mobile devices
const ScrollLayout = ({ scrollClass }) => {
  return (
    <div className={ scrollClass } >
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  )
}

export default ScrollLayout