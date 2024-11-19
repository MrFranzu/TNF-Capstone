import React from 'react';

const Hero = ({ setCurrentPage }) => {
  // Inline styles for the component
  const heroStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh', // Keeps it concise but not overwhelming
    background: 'linear-gradient(120deg, #FFB6C1, #FFA07A)', // Soft pink to light orange gradient
    color: '#333', // Dark text for good contrast on the light background
    textAlign: 'center',
    padding: '20px',
    fontFamily: '"Montserrat", sans-serif', // Modern font for a cool vibe
  };

  const heroContentStyle = {
    maxWidth: '500px', // Balanced width
    width: '100%',
    padding: '20px',
    borderRadius: '8px', // Slightly rounded corners
    backgroundColor: 'white', // Clean white background for content box
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for separation
  };

  const headingStyle = {
    fontSize: '2.5rem', // Larger font size for emphasis
    fontWeight: '700', // Bold weight for stronger impact
    marginBottom: '15px', // Adjusted spacing
    letterSpacing: '2px', // Increased letter spacing for a modern touch
    lineHeight: '1.3',
    color: 'transparent', // Initially set text to transparent to apply gradient text effect
    backgroundImage: 'linear-gradient(120deg, #FF7F50, #FFB6C1)', // Gradient effect
    backgroundClip: 'text', // Clip the background to the text, so gradient shows
    WebkitBackgroundClip: 'text', // For Safari compatibility
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow to give depth
  };

  const paragraphStyle = {
    fontSize: '1.1rem', // Slightly larger font for readability
    lineHeight: '1.6',
    marginBottom: '20px', // More space between paragraph and button
    color: '#666', // Softer color for the paragraph
  };

  const buttonStyle = {
    backgroundColor: '#FF7F50', // Coral-orange for the button
    color: 'white',
    padding: '12px 30px', // Moderate padding for the button
    fontSize: '1.1rem', // Slightly larger font size
    fontWeight: '500', // Light font weight for a clean look
    border: 'none',
    borderRadius: '4px', // Rounded corners for the button
    cursor: 'pointer',
    transition: 'all 0.2s ease', // Subtle transition for hover effect
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for the button
  };

  // Hover effect for the button
  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.05)'; // Slight scale effect on hover
    e.target.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.15)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0px 3px 6px rgba(0, 0, 0, 0.1)';
  };

  return (
    <section style={heroStyle}>
      <div style={heroContentStyle}>
        <h1 style={headingStyle}>Welcome to TNF Event Center</h1>
        <p style={paragraphStyle}>
          Book your next event in just a few clicks. Enjoy a seamless and professional experience.
        </p>
        <button
          style={buttonStyle}
          onClick={() => setCurrentPage('booking')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Book an Event
        </button>
      </div>
    </section>
  );
};

export default Hero;
