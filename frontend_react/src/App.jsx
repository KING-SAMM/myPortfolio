import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, About, Projects, Skills, Contact, Footer, Layout } from './containers';
import { Sidebar } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path='/' element={ <Layout />} />
      </Routes>
      {/* <div className="gradient-bg-home">
        <Sidebar />
      </div> */}
      {/* <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
