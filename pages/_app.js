import { globalStyles } from '../styles/global'
import { ApolloProvider } from "@apollo/client";
import client from '../utils/apollo';

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    {globalStyles}
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App
