import React from 'react';

const Pagination = ({
  pastLaunch,
  pastLaunchID, //TODO: rename this
  setPastLaunchID,
  lastLaunchID
}) => (
  <div className="pagination">
    <button
      style={{ color: 'black' }}
      disabled={pastLaunch.id <= 1}
      onClick={() => setPastLaunchID(pastLaunchID + 1)}
    >
      previous
    </button>
    <span>
      {pastLaunch.id} of {lastLaunchID}
    </span>
    <button
      style={{ color: 'black' }}
      disabled={pastLaunch.id === lastLaunchID}
      onClick={() => setPastLaunchID(pastLaunchID - 1)}
    >
      next
    </button>
  </div>
);

export default Pagination;
