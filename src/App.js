import React, { useState, useEffect } from 'react';
import { launchFetch, next, past } from './apolloFetch';
import './style.css';

function App() {
  const [nextLaunch, setNextLaunch] = useState();
  const [pastLaunch, setPastLaunch] = useState();
  const [pastLaunchID, setPastLaunchID] = useState(0);

  const composeQueries = (...queries) =>
    `{ ${queries.reduce((a, b) => a + b)} }`;

  useEffect(() => {
    const composed = composeQueries(next, past(pastLaunchID));
    let mounted = true;

    mounted &&
      launchFetch(composed)
        .then(res => {
          setNextLaunch(res.data.launchNext);
          setPastLaunch(res.data.launchesPast[0]);
        })
        .catch(error => {
          console.log(error);
        });

    return () => (mounted = false);
  }, [pastLaunchID]);

  return (
    <div id="app">
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
    </div>
  );
}
export default App;
