import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Themes from './Components/Themes'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Themes />
      <Routes>
        <Route index element={<Home/>} />
        <Route  path='about' element={<About/>} />
        <Route  path='portfolio' element={<Portfolio/>} />
        <Route  path='contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
