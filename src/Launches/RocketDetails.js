import React from 'react';
import Emoji from './Emoji';

const RocketDetails = ({
  rocket: { name, diameter, height, mass, details }
}) => (
  <>
    <h3>Rocket details:</h3>
    <h4>
      Rocket
      <Emoji emoji="🚀" />:{name}
    </h4>
    <p>
      Diameter:
      {diameter.meters + 'm'}
    </p>
    <p>
      Height:
      {height.meters + 'm'}
    </p>
    <p>
      Mass <Emoji emoji="🏋️‍" />: {mass.kg + 'kg'}
    </p>
    <p>
      Details:
      {details ? details : 'No details'} //FIXME: its mission details
    </p>
  </>
);

export default RocketDetails;
