import React from 'react';
import Emoji from './Emoji';
import RocketDetails from './RocketDetails';

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
      <RocketDetails rocket={nextLaunch.rocket.rocket} />
    </div>
  </div>
);

export default NextLaunch;
