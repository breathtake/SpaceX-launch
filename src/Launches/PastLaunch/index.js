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
    <Date date={pastLaunch.launch_date_local} />
    <Mission name={pastLaunch.mission_name} /> {/* TODO: add links > mission_patch_small */}
    <RocketDetails rocket={pastLaunch.rocket.rocket} />
    <Links links={pastLaunch.links} />
    <Gallery images={pastLaunch.links.flickr_images} />
    <GoTopButton />
  </>
);

export default PastLaunch;
