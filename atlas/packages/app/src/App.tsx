import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import store from './store'
import { Layout } from './components'
import { HomeView } from './views'

const client = new ApolloClient({
	uri: 'http://localhost:9002/graphql',
	cache: new InMemoryCache(),
})
export default function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Layout>
					<Router primary={false}>
						<HomeView default />
					</Router>
				</Layout>
			</Provider>
		</ApolloProvider>
	)
}
