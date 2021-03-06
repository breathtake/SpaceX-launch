import React, { useState, useEffect } from 'react';
import { launchFetch, composeQueries } from './apolloFetch';
import { next, past, last } from './queries';
import Tabs from './Tabs';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [nextLaunch, setNextLaunch] = useState();
  const [pastLaunch, setPastLaunch] = useState();
  const [pastLaunchOffset, setPastLaunchOffset] = useState(0);
  const [lastLaunchID, setLastLaunchID] = useState(0);

  useEffect(() => {
    const composedQueries = composeQueries(next, past(pastLaunchOffset), last);
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
  }, [pastLaunchOffset]);

  return (
    <div id="app">
      <GlobalStyle />
      {nextLaunch && pastLaunch && (
        <Tabs
          {...{
            nextLaunch,
            pastLaunch,
            pastLaunchOffset,
            setPastLaunchOffset,
            lastLaunchID
          }}
        />
      )}
    </div>
  );
}
export default App;
