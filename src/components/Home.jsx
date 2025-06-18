import React from 'react';
import { Element } from 'react-scroll';
import '../styles/Home.css';
import arrow from '../assets/white-arrow.png';

export default function Home() {
  return (
    <Element name="home">
      <div className='home-container'>
        <div className="image-overlay">
          <h1 className='college-desC'><b> We ensure better education for a better world</b></h1>
          <p>
            Edusity is a forward-thinking educational institute...
          </p>
          <button>Explore More <img src={arrow} alt="arrow-pic"/></button>
        </div>
      </div>
    </Element>
  );
}
