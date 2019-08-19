import React, { useState, useEffect } from 'react';
const { createApolloFetch } = require('apollo-fetch');

function App() {
  const [launchInfo, setLaunchInfo] = useState({});

  useEffect(() => {
    const apolloFetch = createApolloFetch({
      uri: 'https://api.spacex.land/graphql/'
    });

    apolloFetch({
      query: `query UpcomingLaunche {
      launchesUpcoming(sort: "launch_date_local", limit: 1) {
        launch_date_local
        rocket {
          rocket {
            name
          }
        }
      }
    }`,
      variables: { id: 1 }
    }).then(res => setLaunchInfo(res.data.launchesUpcoming[0]));
  }, []);

  useEffect(() => console.log(JSON.stringify(launchInfo, null, '\t')), [
    launchInfo
  ]);

  return (
    <div>
      <h1>SpaceX</h1>
      <h2>
        rocket:{' '}
        {Object.keys(launchInfo).length > 0 && launchInfo.rocket.rocket.name}
      </h2>
    </div>
  );
}
export default App;
