import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css'
export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_huu3wqs', 'template_vvxy9eb', form.current, {
        publicKey: '1sH5YYSugq1B7l31K',
      })
      .then(
        () => {
          console.log('Message Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="form1">
      <h1>Contact Me:</h1>
      <div className="form2">
        <div className="image-container">
        <img src="../public/codingGirl.gif" alt="sideImage" />
        <div className="text-overlay">
        </div>

        </div>
        <div className="elements">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;