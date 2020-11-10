import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://movieql.now.sh/',
	cache: new InMemoryCache(),
});

export default client;
