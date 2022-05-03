import { useState } from 'react'
import { Home, About, Projects, Skills, Contact, Footer } from './containers';
import { Navbar } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-home">
        <Navbar />
        <Home />
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
