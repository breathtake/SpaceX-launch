import React from 'react';
import StyledGoTopButton from '../../styles/StyledGoTopButton';

const ScrollTopButton = ({ text }) => (
  <StyledGoTopButton onClick={() => window.scrollTo(0, 0)}>
    {text}
  </StyledGoTopButton>
);

export default ScrollTopButton;
