import React from 'react';
import DesktopPagination from './DesktopPagination';
import MobilePagination from './MobilePagination';
import { useMediaQuery } from 'react-responsive';

const Pagination = ({
  pastLaunch,
  pastLaunchID, //TODO: rename this
  setPastLaunchID,
  lastLaunchID
}) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? (
    <DesktopPagination
      pastLaunch={pastLaunch}
      pastLaunchID={pastLaunchID}
      setPastLaunchID={setPastLaunchID}
      lastLaunchID={lastLaunchID}
    />
  ) : (
    <MobilePagination
      pastLaunch={pastLaunch}
      pastLaunchID={pastLaunchID}
      setPastLaunchID={setPastLaunchID}
      lastLaunchID={lastLaunchID}
    />
  );
};

export default Pagination;
