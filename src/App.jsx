import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Program from './components/Program'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Program />
      <About />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
