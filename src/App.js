import React, { useState, useEffect } from 'react';
import { launchFetch, composeQueries } from './apolloFetch';
import { next, past } from './queries';
import NextLaunch from './NextLaunch';
import PastLaunch from './PastLaunch/';
import './style.css';

function App() {
  const [nextLaunch, setNextLaunch] = useState();
  const [pastLaunch, setPastLaunch] = useState();
  const [pastLaunchID, setPastLaunchID] = useState(0);

  useEffect(() => {
    const composedQueries = composeQueries(next, past(pastLaunchID));
    let mounted = true;

    mounted &&
      launchFetch(composedQueries)
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
      {nextLaunch && <NextLaunch nextLaunch={nextLaunch} />}
      {pastLaunch && (
        <PastLaunch
          pastLaunch={pastLaunch}
          pastLaunchID={pastLaunchID}
          setPastLaunchID={setPastLaunchID}
        />
      )}
    </div>
  );
}
export default App;
