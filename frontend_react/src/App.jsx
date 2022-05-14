import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home, About, Projects, Skills, Contact, Blog, Footer, Layout, ScrollLayout } from './containers';
import { Sidebar } from './components';

const App = () => {

  return (
    <div className="">
      <div className='scroll'>
        <ScrollLayout />
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
