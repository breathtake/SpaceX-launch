import React, { useState, useEffect } from 'react';
import { launchFetch, composeQueries } from './apolloFetch';
import { next, past, last } from './queries';
import NextLaunch from './Launches/NextLaunch';
import PastLaunch from './Launches/PastLaunch';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [nextLaunch, setNextLaunch] = useState();
  const [pastLaunch, setPastLaunch] = useState();
  const [pastLaunchOffset, setPastLaunchOffset] = useState(0);
  const [lastLaunchID, setLastLaunchID] = useState(0);
  const [activeTab, setActiveTab] = useState('next');

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

  const tabs = {
    next: <NextLaunch nextLaunch={nextLaunch} />,
    past: (
      <PastLaunch
        pastLaunch={pastLaunch}
        pastLaunchOffset={pastLaunchOffset}
        setPastLaunchOffset={setPastLaunchOffset}
        lastLaunchID={lastLaunchID}
      />
    )
  };

  return (
    <div id="app">
      <GlobalStyle />
      <button onClick={() => setActiveTab('next')}>next</button>
      <button onClick={() => setActiveTab('past')}>past</button>
      {nextLaunch && pastLaunch && tabs[activeTab]}
    </div>
  );
}
export default App;
