import React from 'react'
import ReactDOM from 'react-dom'
// external
import { Provider, Client, fetchExchange, dedupExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
// internal
import App from './App'
import './index.css'
const cache = cacheExchange({})

const client = new Client({
 url: 'https://api.github.com/graphql',
 exchange: { dedupExchange, cache, fetchExchange },
 fetchOptions: () => {
  return {
   headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer  ${process.env.REACT_APP_NOT_SECRET_CODE}`,
   },
  }
 },
})

ReactDOM.render(
 <Provider value={client}>
  <App />
 </Provider>,
 document.getElementById('root')
)
