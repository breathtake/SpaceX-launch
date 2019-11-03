import React from 'react';
import Emoji from '../Emoji';
import Pagination from './Pagination';
import Mission from '../Mission';
import RocketDetails from '../RocketDetails';
import Links from './Links';
import Gallery from './Gallery';

const PastLaunch = ({
  pastLaunch,
  pastLaunchID,
  setPastLaunchID,
  lastLaunchID
}) => (
  <>
    <h2>Past launches</h2>
    <Pagination
      pastLaunch={pastLaunch}
      pastLaunchID={pastLaunchID}
      setPastLaunchID={setPastLaunchID}
      lastLaunchID={lastLaunchID}
    />
    <span>
      <Emoji emoji="🗓" />
      {pastLaunch.launch_date_local}
    </span>
    <Mission name={pastLaunch.mission_name} />
    <RocketDetails rocket={pastLaunch.rocket.rocket} />
    <Links links={pastLaunch.links} />
    <Gallery images={pastLaunch.links.flickr_images} />
    <button
      onClick={() => window.scrollTo(0, 0)}
      style={{
        fontSize: '1.5rem',
        width: '100%',
        padding: '0.5rem',
        marginTop: '1rem'
      }}
    >
      go to next launch
    </button>
  </>
);

export default PastLaunch;
