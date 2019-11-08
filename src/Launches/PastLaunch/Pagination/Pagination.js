import React from 'react';
import DesktopPagination from './DesktopPagination';
import MobilePagination from './MobilePagination/';
import { useMediaQuery } from 'react-responsive';

const Pagination = ({
  pastLaunch,
  pastLaunchOffset,
  setPastLaunchOffset,
  lastLaunchID
}) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? (
    <DesktopPagination
      pastLaunch={pastLaunch}
      pastLaunchOffset={pastLaunchOffset}
      setPastLaunchOffset={setPastLaunchOffset}
      lastLaunchID={lastLaunchID}
    />
  ) : (
    <MobilePagination
      setPastLaunchOffset={setPastLaunchOffset}
      lastLaunchID={lastLaunchID}
    />
  );
};

export default Pagination;
