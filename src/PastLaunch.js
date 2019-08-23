import React from 'react';
const PastLaunch = ({ pastLaunch, pastLaunchID, setPastLaunchID }) => (
  <div>
    <h2>Past</h2>
    <span>{pastLaunch && pastLaunch.id}</span>
    <h1>{pastLaunch && pastLaunch.rocket.rocket.name}</h1>
    <h3>mission_name: {pastLaunch && pastLaunch.mission_name}</h3>
    <button
      style={{ color: 'black' }}
      onClick={() => setPastLaunchID(pastLaunchID + 1)}
    >
      previous
    </button>
    <span>{pastLaunch && pastLaunch.id}</span>
    <button
      style={{ color: 'black' }}
      onClick={() => setPastLaunchID(pastLaunchID - 1)}
    >
      next
    </button>
  </div>
);

export default PastLaunch;
