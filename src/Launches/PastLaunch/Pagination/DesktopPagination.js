import React from 'react';

const DesktopPagination = ({
  pastLaunch,
  pastLaunchOffset,
  setPastLaunchOffset,
  lastLaunchID
}) => (
  <div className="pagination">
    <button
      style={{ color: 'black' }}
      disabled={pastLaunch.id <= 1}
      onClick={() => setPastLaunchOffset(pastLaunchOffset + 1)}
    >
      previous
    </button>
    <span>
      {pastLaunch.id} of {lastLaunchID}
    </span>
    <button
      style={{ color: 'black' }}
      disabled={pastLaunch.id === lastLaunchID}
      onClick={() => setPastLaunchOffset(pastLaunchOffset - 1)}
    >
      next
    </button>
  </div>
);

export default DesktopPagination;
