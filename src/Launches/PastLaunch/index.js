import React from 'react';
import Pagination from './Pagination/Pagination';
import Date from '../Date';
import Mission from '../Mission';
import RocketDetails from '../RocketDetails';
import Links from './Links';
import Gallery from './Gallery';
import GoTopButton from './GoTopButton';

const PastLaunch = ({
  pastLaunch,
  pastLaunch: {
    launch_date_local,
    mission_name,
    rocket: { rocket },
    links
  },
  pastLaunchOffset,
  setPastLaunchOffset,
  lastLaunchID
}) => (
  <>
    <h2>Past launches</h2>
    <Pagination
      pastLaunch={pastLaunch}
      pastLaunchOffset={pastLaunchOffset}
      setPastLaunchOffset={setPastLaunchOffset}
      lastLaunchID={lastLaunchID}
    />
    <Date date={launch_date_local} />
    <Mission name={mission_name} />{' '}
    {/* TODO: add links > mission_patch_small */}
    <RocketDetails rocket={rocket} />
    <Links links={links} />
    <Gallery images={links.flickr_images} />
    <GoTopButton />
  </>
);

export default PastLaunch;
