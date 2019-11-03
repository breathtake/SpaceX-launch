import React from 'react';
import Emoji from './Emoji';

const Mission = ({ name }) => (
  <h2>
    Mission
    <Emoji emoji="📌" />: {name}
  </h2>
);

export default Mission;
