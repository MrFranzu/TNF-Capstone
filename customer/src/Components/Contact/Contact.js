import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handlePhoneNumberClick = () => {
    const phoneNumber = '0927-848-2108'; // The phone number to copy
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000); // Hide the notification after 2 seconds
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="number">Phone Number</label>
        <div className="phone-number-container">
          <h3 onClick={handlePhoneNumberClick} style={{ cursor: 'pointer' }}>
            0927-848-2108
          </h3>
          {isCopied && <div className="copy-notification">Copied to clipboard!</div>}
        </div>

        <label htmlFor="link">Facebook</label>
        <h3>
          <a 
            href="https://www.facebook.com/tnfeventcenter" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            TNF Event Center
          </a>
        </h3>

        {/* Updated Location Section with a clickable link on the location text */}
        <label htmlFor="location">Location</label>
        <h3>
          <a 
            href="https://www.google.com/maps/place/TNF+Event+Center/@13.7671504,121.0597211,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd05c4fdf15cef:0xff24b5bfb4044a9a!8m2!3d13.7671452!4d121.062296!16s%2Fg%2F11v5dkhqgs?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Kumintang Ibaba, Batangas City (in front of main gate Capitol, beside Shell Gas Station)
          </a>
        </h3>
      </form>
    </div>
  );
};

export default Contact;
