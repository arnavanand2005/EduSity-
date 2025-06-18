import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Program from './components/Program'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoPlayer from './components/Videoplayer'

const App = () => {

  const [playState,setPlayState] = useState(false)

  return (
    <div>
      <Navbar />
      <Home/>
      <Program />
      <About setPlayState={setPlayState}/>
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
      <VideoPlayer  playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
