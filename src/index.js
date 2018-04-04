import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import './index.css'
import App from './App'
import reducer from './rootReducer'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import promiseMiddleware from 'redux-promise-middleware'
import { BrowserRouter } from 'react-router-dom'

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
