import React from 'react';
import '../styles/Contact.css';
import mail_icon from '../assets/mail-icon.png';
import phone_icon from '../assets/phone-icon.png';
import location_icon from '../assets/location-icon.png';
import arrow_icon from '../assets/white-arrow.png';

export default function Contact() {
    const [result, setResult] = React.useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "7e428775-c488-4c43-8478-7cd6dabbfd89");
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    
    return (
        <div className='contact-container'>
            <div className="contact-header">
                <h1><span className="contact-highlight">CONNECT</span> WITH US</h1>
                <h2 className="contact-subtitle">
                    <span className="contact-subtitle-line">Let's Start a Conversation</span>
                    <span className="contact-subtitle-icon">💬</span>
                </h2>
            </div>

            <div className="contact-content">
                <div className="contact-left">
                    <h3 className="contact-left-title">Send us a <span className="wave-emoji">👋</span></h3>
                    <p>
                        Feel free to reach out through contact form or find our contact information below. 
                        Your feedback, questions, and suggestions are important to us as we strive to provide 
                        exceptional service to our university community.
                    </p>
                    
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src={mail_icon} alt="Email" className="contact-icon" />
                            <span className="contact-text">arnavanand2005@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <img src={phone_icon} alt="Phone" className="contact-icon" />
                            <span className="contact-text">+1123-456-7890</span>
                        </div>
                        <div className="contact-item">
                            <img src={location_icon} alt="Location" className="contact-icon" />
                            <span className="contact-text">77 Massachusetts Ave, Cambridge MA 02139, United States</span>
                            <img src={location_icon} alt="Location" className="contact-icon" />
                            <span className="contact-text">124 Downtown Ave, Vancouver CA 65729, Canada</span>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label className="form-label">Your name</label>
                            <input type="text" name="name" placeholder="Enter your name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" name="phone" placeholder="Enter your mobile number" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Write your messages here</label>
                            <textarea name="message" placeholder="Enter your message" className="form-textarea" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            <span>Submit now</span>
                            <img src={arrow_icon} alt="arrow" className="submit-arrow" />
                        </button>
                    </form>
                    <span className="form-result">{result}</span>
                </div>
            </div>
        </div>
    )
}