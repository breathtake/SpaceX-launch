import React from 'react';

const ScrollTopButton = ({ text }) => (
  <button
    onClick={() => window.scrollTo(0, 0)}
    style={{
      fontSize: '1.5rem',
      width: '100%',
      padding: '0.5rem',
      marginTop: '1rem'
    }}
  >
    {text}
  </button>
);

export default ScrollTopButton;
