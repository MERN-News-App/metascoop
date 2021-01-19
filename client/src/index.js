import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';


import reducers from './reducers'

import App from './App'
import './index.scss'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

console.log(store.reducers, "HEEER I AM")

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')
    )