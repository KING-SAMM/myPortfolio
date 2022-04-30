import { useState } from 'react'
import { Home, About, Projects, Skills, Contact, Footer } from './containers';

const App = () => {

  return (
    <div className="App">
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
