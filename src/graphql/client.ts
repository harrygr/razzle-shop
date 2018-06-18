import { InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const link = new HttpLink({ uri: 'http://localhost:4000/graphql', fetch });

export const serverClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: true,
});

export const clientClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrForceFetchDelay: 100,
});
