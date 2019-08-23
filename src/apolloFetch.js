import { createApolloFetch } from 'apollo-fetch';

const apolloFetch = createApolloFetch({
  uri: 'https://api.spacex.land/graphql/'
});

export const next = `launchNext {
  launch_date_local
  mission_name
  details
  rocket {
    rocket {
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
      name
    }
  }
}`;

export const past = offset => `launchesPast(offset: ${offset || 0}, limit: 1) {
  id
  launch_date_local
  mission_name
	rocket {
    rocket {
			name
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
      name
    }
  }
	links {
		video_link
		article_link
		flickr_images
	}
}`;

export const launchFetch = query => {
  console.log('launchFetch');

  return apolloFetch({
    query: query
    // variables: { id: 1 }
  });
};
