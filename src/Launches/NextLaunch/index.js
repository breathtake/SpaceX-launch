import React from 'react';
import Date from '../Date';
import Mission from '../Mission';
import RocketDetails from '../RocketDetails';

const NextLaunch = ({
  nextLaunch: {
    launch_date_local,
    details,
    mission_name,
    links: { mission_patch_small },
    rocket: { rocket }
  }
}) => (
  <>
    <h1>SpaceX next launch</h1>
    <Date date={launch_date_local} />
    <Mission name={mission_name} />
    {mission_patch_small && (
      <img src={mission_patch_small} alt="mission_patch_small" />
    )}
    <RocketDetails rocket={rocket} />
    {/* <MissionDetails details={details} /> */}
    <div>
      <span>Mission details:</span>
      <p>{details}</p>
    </div>
  </>
);

export default NextLaunch;
