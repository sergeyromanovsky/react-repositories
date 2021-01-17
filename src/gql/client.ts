import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
  },
  cache: new InMemoryCache()
});
