import React, { useState } from 'react';
import NextLaunch from './Launches/NextLaunch';
import PastLaunch from './Launches/PastLaunch';

const Tabs = ({
  nextLaunch,
  pastLaunch,
  pastLaunchOffset,
  setPastLaunchOffset,
  lastLaunchID
}) => {
  const [activeTab, setActiveTab] = useState('next');

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

  const changeTab = tabName => setActiveTab(tabName);

  const NextLaunchButton = () => (
    <button onClick={() => changeTab('next')}>Next</button>
  );

  const PastLaunchButton = () => (
    <button onClick={() => changeTab('past')}>Past</button>
  );

  return (
    <div>
      <NextLaunchButton />
      <PastLaunchButton />
      {tabs[activeTab]}
    </div>
  );
};

export default Tabs;
