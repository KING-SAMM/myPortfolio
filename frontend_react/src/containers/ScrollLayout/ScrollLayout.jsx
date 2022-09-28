import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, About, Skills, Projects, Contact, Footer, Test, Trial } from '../index';
import './ScrollLayout.scss';

// Alternate Layout for scrolling on mobile devices
const ScrollLayout = ({ scrollClass }) => {
  return (
    // <div className={ scrollClass } >
    <div className='scroll'>
      <Home id="home" />
      {/* <Trial className='' />
      <Test className='' /> */}
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer id="footer" />  
    </div>
  )
}

export default ScrollLayout