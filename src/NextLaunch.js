import React from 'react';

const NextLaunch = ({ nextLaunch }) => (
  <div id="nextlaunchCard">
    <div className="content">
      <h1>SpaceX next launch</h1>
      <span>
        🗓
        {nextLaunch && nextLaunch.launch_date_local}
      </span>
      <h2>
        Rocket🚀:
        {nextLaunch && nextLaunch.rocket.rocket.name}
      </h2>
      <h3>
        Mission📌:
        {nextLaunch && nextLaunch.mission_name}
      </h3>
      {nextLaunch && (
        <div>
          <h4>Rocket details:</h4>
          {nextLaunch.rocket.rocket.description}
          <p>Height: {nextLaunch.rocket.rocket.height.meters} m</p>
          <p>Mass: {nextLaunch.rocket.rocket.mass.kg} kg</p>
        </div>
      )}
    </div>
  </div>
);

export default NextLaunch;
