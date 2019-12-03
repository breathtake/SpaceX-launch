import React, { useState } from 'react';
import NextLaunch from './Launches/NextLaunch';
import PastLaunch from './Launches/PastLaunch';
import { NavigationBar, StyledNavButton } from 'styles/NavigationBar';

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
    <StyledNavButton
      isActive={activeTab === 'next' && true}
      onClick={() => changeTab('next')}
    >
      Next
    </StyledNavButton>
  );

  const PastLaunchButton = () => (
    <StyledNavButton
      isActive={activeTab === 'past' && true}
      onClick={() => changeTab('past')}
    >
      Past
    </StyledNavButton>
  );

  const Navigation = () => (
    <NavigationBar>
      <NextLaunchButton />
      <PastLaunchButton />
    </NavigationBar>
  );

  return (
    <div>
      <Navigation />
      {tabs[activeTab]}
    </div>
  );
};

export default Tabs;
