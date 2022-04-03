import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import withData from '../components/Utils/withData'

function MyApp({ Component, pageProps, apollo }) {
  return <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
}

export default withData(MyApp)
