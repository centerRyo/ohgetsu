import Layout from '@/components/layout';
import theme from '@/utils/theme';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  from,
  InMemoryCache,
} from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createUploadLink } from 'apollo-upload-client';
import type { AppProps } from 'next/app';

const uploadLink = createUploadLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
});

const client = new ApolloClient({
  link: from([uploadLink as unknown as ApolloLink]),
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
