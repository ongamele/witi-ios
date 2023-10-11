import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://witi-api-5f5efe4b2e12.herokuapp.com/graphql",

  cache: new InMemoryCache(),
});
