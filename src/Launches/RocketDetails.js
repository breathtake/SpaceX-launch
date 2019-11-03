import React from 'react';
import Emoji from './Emoji';

const RocketDetails = ({ rocket }) => (
  <>
    <h3>Rocket details:</h3>
    <h4>
      Rocket
      <Emoji emoji="🚀" />:{rocket.name}
    </h4>
    <p>
      Diameter:
      {rocket.diameter.meters + 'm'}
    </p>
    <p>
      Height:
      {rocket.height.meters + 'm'}
    </p>
    <p>
      Mass <Emoji emoji="🏋️‍" />: {rocket.mass.kg + 'kg'}
    </p>
    <p>
      Details:
      {rocket.details ? rocket.details : 'No details'}
    </p>
  </>
);

export default RocketDetails;
