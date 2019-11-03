import React from 'react';
import Emoji from './Emoji';

const Date = ({ date }) => (
  <span>
    <Emoji emoji="🗓" />
    {date}
  </span>
);

export default Date;
