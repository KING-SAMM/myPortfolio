import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home, About, Projects, Skills, Contact, Footer, Layout } from './containers';
import { Sidebar } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      {/* <Layout /> */}
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/skills' element={ <Skills /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Route>
      </Routes>
      {/* 
      <Projects />
      <Skills />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
