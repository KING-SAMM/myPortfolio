import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
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
