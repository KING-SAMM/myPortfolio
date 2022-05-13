import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home, About, Projects, Skills, Contact, Blog, Footer, Layout } from './containers';
import { Sidebar } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      {/* <Layout /> */}  
      <div className='scroll w-full h-full'>

      <Home />
      <Projects />
      <Blog />
      <Projects />
      <Blog />
      <Projects />
      <Projects />
      <Blog />
      <Projects />
      <Projects />

      <About />
      
      <Blog />
      <Projects />
      <Projects />
      <Blog />
      <Projects />
      <Projects />
      <Blog />
      <Projects />
      <Projects />
      <Blog />
      <Projects />

      <Skills />

      <Blog />
      <Projects />
      <Blog />
      <Projects />
      <Projects />
      <Blog />
      <Projects />
      <Projects />
      <Blog />
      <Projects />
      <Projects />
      <Blog />
      <Projects />
      <Projects />
      <Blog />
      <Projects />
      <Projects />

      <Contact />

      </div>              
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/skills' element={ <Skills /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
