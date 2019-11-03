import React from 'react';

const Pagination = ({
  pastLaunch,
  pastLaunchID,
  setPastLaunchID,
  lastLaunchID
}) => (
  <div className="pagination">
    <button
      style={{ color: 'black' }}
      onClick={() => setPastLaunchID(pastLaunchID + 1)}
    >
      previous
    </button>
    <span>
      {pastLaunch.id} of {lastLaunchID}
    </span>
    <button
      style={{ color: 'black' }}
      onClick={() => setPastLaunchID(pastLaunchID - 1)}
    >
      next
    </button>
  </div>
);

export default Pagination;
