import { useState } from 'react'
import { Home, About, Projects, Skills, Contact, Footer } from './containers';
import { Navbar } from './components';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
