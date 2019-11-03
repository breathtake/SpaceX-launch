import React from 'react';
import Date from '../Date';
import Mission from '../Mission';
import RocketDetails from '../RocketDetails';

const NextLaunch = ({ nextLaunch }) => (
  <div id="nextlaunchCard">
    <div className="content">
      <h1>SpaceX next launch</h1>
      <Date date={nextLaunch.launch_date_local} />
      <Mission name={nextLaunch.mission_name} />
      <RocketDetails rocket={nextLaunch.rocket.rocket} />
    </div>
  </div>
);

export default NextLaunch;
