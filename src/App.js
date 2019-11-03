import React, { useState, useEffect } from 'react';
import { launchFetch, composeQueries } from './apolloFetch';
import { next, past, last } from './queries';
import NextLaunch from './Launches/NextLaunch';
import PastLaunch from './Launches/PastLaunch';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [nextLaunch, setNextLaunch] = useState();
  const [pastLaunch, setPastLaunch] = useState();
  const [pastLaunchID, setPastLaunchID] = useState(0);
  const [lastLaunchID, setLastLaunchID] = useState(0);

  useEffect(() => {
    const composedQueries = composeQueries(next, past(pastLaunchID), last);
    let mounted = true;

    mounted &&
      launchFetch(composedQueries)
        .then(res => {
          const { launchNext, launchesPast, launchLatest } = res.data;
          setNextLaunch(launchNext);
          setPastLaunch(launchesPast[0]);
          setLastLaunchID(launchLatest.id);
        })
        .catch(error => {
          console.log(error);
        });

    return () => (mounted = false);
  }, [pastLaunchID]);

  return (
    <div id="app">
			<GlobalStyle />
      {nextLaunch && <NextLaunch nextLaunch={nextLaunch} />}
      {pastLaunch && (
        <PastLaunch
          pastLaunch={pastLaunch}
          pastLaunchID={pastLaunchID}
          setPastLaunchID={setPastLaunchID}
          lastLaunchID={lastLaunchID}
        />
      )}
    </div>
  );
}
export default App;
