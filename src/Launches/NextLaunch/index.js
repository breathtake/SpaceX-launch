import React from 'react';
import Date from '../Date';
import Mission from '../Mission';
import RocketDetails from '../RocketDetails';

const NextLaunch = ({
  nextLaunch: {
    launch_date_local,
    mission_name,
    rocket: { rocket }
  }
}) => (
  <>
    <h1>SpaceX next launch</h1>
    <Date date={launch_date_local} />
    <Mission name={mission_name} />
    <RocketDetails rocket={rocket} />
  </>
);

export default NextLaunch;
