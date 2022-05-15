import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, About, Skills, Contact } from '../index';
import './ScrollLayout.scss';

// Alternate Layout for scrolling on mobile devices
const ScrollLayout = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default ScrollLayout