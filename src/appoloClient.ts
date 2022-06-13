import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URI,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apiLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `ApiKey ${process.env.REACT_APP_API_TOKEN}`,
    },
  };
});

const apiEndpoint = apiLink.concat(httpLink);
const authEndpoint = authLink.concat(httpLink);

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "apiEndpoint",
    apiEndpoint,
    authEndpoint
  ),
  cache: new InMemoryCache(),
});

export default client;
