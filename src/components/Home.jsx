import React from 'react'
import '../styles/Home.css'
import arrow from '../assets/white-arrow.png'

export default function Home() {
  return (
    <div className='home-container'>
      <div className="image-overlay">
        <h1 className='college-desC'>
        <b> We ensure better education
          for a better world
        </b> </h1>
        <p>
        Edusity is a forward-thinking educational institute dedicated to empowering students through a dynamic, industry-aligned curriculum. By blending academic excellence with practical skills, Edusity nurtures critical thinking, creativity, and real-world problem-solving—preparing learners to thrive in today’s competitive, tech-driven world and become future-ready leaders.
        </p>
        <button>Explore More <img src={arrow} alt="arrow-pic"/></button>
      </div>  
    </div>
  )
}
