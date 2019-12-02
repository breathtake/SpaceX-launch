import React from 'react';

const DesktopPagination = ({
  pastLaunch: { id },
  pastLaunchOffset,
  setPastLaunchOffset,
  lastLaunchID
}) => (
  <div className="pagination">
    <button
      style={{ color: 'black' }}
      disabled={id <= 1}
      onClick={() => setPastLaunchOffset(pastLaunchOffset + 1)}
    >
      previous
    </button>
    <span>
      {id} of {lastLaunchID}
    </span>
    <button
      style={{ color: 'black' }}
      disabled={id === lastLaunchID}
      onClick={() => setPastLaunchOffset(pastLaunchOffset - 1)}
    >
      next
    </button>
  </div>
);

export default DesktopPagination;
