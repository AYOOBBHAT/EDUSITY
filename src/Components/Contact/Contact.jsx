import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

// Replace these placeholders with your actual values
const EMAILJS_SERVICE_ID = 'service_1z5z7qk';
const EMAILJS_TEMPLATE_ID = 'template id';
const EMAILJS_USER_ID = 'publickey';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      event.target,
      EMAILJS_USER_ID
    ).then((response) => {
      console.log('Success!', response.status, response.text);
      setResult("Message sent successfully!");
      event.target.reset();
    }, (error) => {
      console.log('Failed...', error);
      setResult("Failed to send message.");
    });
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Tabindagani2007@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 9906640490</li>
            <li><img src={location_icon} alt="" /> Handwara, Kupwara<br/> 193221, Kashmir</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
