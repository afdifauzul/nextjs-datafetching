import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://b2cdemo.getswift.asia/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp







// function App() {
//   return (
//     <div>
//       <h2>My first Apollo app 🚀</h2>
//     </div>
//   );
// }

// render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root'),
// );
