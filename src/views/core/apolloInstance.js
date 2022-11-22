import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: 'https://api-us-east-1.hygraph.com/v2/cl9zzfxdq3lof01ukh2lm16b4/master'
});

const authLink = setContext((_, {headers }) => {
    const token = process.env.REACT_APP_HYPERGRAPH_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});


export default client;