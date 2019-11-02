import React from 'react';
import Emoji from './Emoji';

const NextLaunch = ({ nextLaunch }) => (
  <div id="nextlaunchCard">
    <div className="content">
      <h1>SpaceX next launch</h1>
      <span>
        🗓
        {nextLaunch.launch_date_local}
      </span>
      <h3>
        Mission
        <Emoji emoji="📌" />:{nextLaunch.mission_name}
      </h3>
      {
        <div>
          <h2>Rocket details:</h2>
          <h3>
            Rocket
            <Emoji emoji="🚀" />:{nextLaunch.rocket.rocket.name}
          </h3>
          <p>
            Diameter:
            {nextLaunch.rocket.rocket.diameter.meters + 'm'}
          </p>
          <p>
            Height:
            {nextLaunch.rocket.rocket.height.meters + 'm'}
          </p>
          <p>
            Mass <Emoji emoji="🏋️‍" />:
            {nextLaunch.rocket.rocket.mass.kg + 'kg'}
          </p>
          <p>
            Details:
            {nextLaunch.details}
          </p>
        </div>
      }
    </div>
  </div>
);

export default NextLaunch;
