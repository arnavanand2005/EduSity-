import React from 'react'
import gallery_1 from '../assets/gallery-1.png';
import gallery_2 from '../assets/gallery-2.png';
import gallery_3 from '../assets/gallery-3.png';
import gallery_4 from '../assets/gallery-4.png';
import gallery_5 from '../assets/gallery-5.png';
import gallery_6 from '../assets/gallery-6.png';
import white_arrow from '../assets/white-arrow.png'
import '../styles/Campus.css'
import { Element } from 'react-scroll';

export default function Campus() {
  return (
    <Element name='campus'>
    <div className='campus-container'>
        <div className="heading-container">
            <h4 className='main-campus-subheading'>GALLERY</h4>
            <h1 className='main-campus-heading'>
                CAMPUS PHOTOS
            </h1>
            <div className="campus-image-container">
            <div className="image-list">
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
                <img src={gallery_6} alt="" />
                <img src={gallery_5} alt="" />
            </div>
            <button>See more <img src={white_arrow} alt="" /></button>
            </div>
        </div>
    </div>
    </Element>
  )
}
