import { ApolloProvider } from "@apollo/client";
import { globalStyles } from '../styles/global';
import client from '../utils/apollo';
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Head>
      <meta name="viewport" content="width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="32x32" href="/favicon32.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon32.ico"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico"/>
    </Head>
    {globalStyles}
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App
