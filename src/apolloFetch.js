import { createApolloFetch } from 'apollo-fetch';

const apolloFetch = createApolloFetch({
  uri: 'https://api.spacex.land/graphql/'
});

export const composeQueries = (...queries) =>
  `{ ${queries.reduce((a, b) => a + b)} }`;

export const launchFetch = query =>
  apolloFetch({
    query
  });
