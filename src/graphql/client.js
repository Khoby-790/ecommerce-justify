import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:800',
    cache: new InMemoryCache()
});

export { client }