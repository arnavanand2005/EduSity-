import React, { useRef } from 'react';
import user_1 from '../assets/user-1.png';
import user_2 from '../assets/user-2.png';
import user_3 from '../assets/user-3.png';
import user_4 from '../assets/user-4.png';
import back_icon from '../assets/back-icon.png';
import next_icon from '../assets/next-icon.png';
import '../styles/Testimonials.css';

export default function Testimonials() {
        const slider = useRef(); 
        const tx = useRef(0);
        const totalSlides = 4; 
        const slidesToShow = 2; 

        function forwardslide() {
            const maxTranslate = -((totalSlides - slidesToShow) * (100 / slidesToShow));
            if (tx.current > maxTranslate) {
                tx.current -= 100 / slidesToShow; // Move by 50% (since showing 2)
                slider.current.style.transform = `translateX(${tx.current}%)`;
            }
        }
    
        function backwardslide() {
            if (tx.current < 0) {
                tx.current += 100 / slidesToShow; // Move back by 50%
                slider.current.style.transform = `translateX(${tx.current}%)`;
            }
        }

    const student_review_list = [
        {
            id: 1,
            name: "Alex Dunphy",
            location: 'EduSity, USA',
            review: `Edusity's project-based curriculum gave me the exact skills I needed to land my dream job at a tech startup.`,
            image: user_1
        },
        {
            id: 2,
            name: "Diljit Dhillon",
            location: 'EduSity, Canada',
            review: 'The AI specialization program exceeded all my expectations. I went from beginner to building ML models in 6 months.',
            image: user_2
        },
        {
            id: 3,
            name: "Sofia Addams",
            location: 'EduSity, USA',
            review: "Flexible scheduling allowed me to upskill without quitting my job. Quality instruction rivals top universities.",
            image: user_3
        },
        {
            id: 4,
            name: "Marcus Rashford",
            location: 'EduSity, UK',
            review: "The global student community provided networking opportunities I couldn't find elsewhere.",
            image: user_4
        }
    ];

    return (
        <div className="testimonial-container">
            <div className="testimonial-heading-container">
                <h1 className='testimonials-main-heading'>TESTIMONIALS</h1>
                <h4 className='testimonial-subheading'>What Students Say</h4>
            </div>

            <div className="testimonial-slider-wrapper">
                <div className="testimonial-slider" ref={slider}>
                    {student_review_list.map((review) => (
                        <div className="testimonial-card" key={review.id}>
                            <div className="testimonial-content">
                                <div className="user-info">
                                    <img className="user-avatar" src={review.image} alt={review.name} />
                                    <div>
                                        <h3 className="user-name">{review.name}</h3>
                                        <p className="user-location">{review.location}</p>
                                    </div>
                                </div>
                                <p className="user-review">"{review.review}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="navigation-arrows">
                <button onClick={backwardslide} className='arrow-btn'><img src={back_icon} alt="Previous" /></button>
                <button onClick={forwardslide} className='arrow-btn'><img src={next_icon} alt="Next" /></button>
            </div>
        </div>
    );
}
