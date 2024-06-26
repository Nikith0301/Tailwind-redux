import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './components/store.js'
import bank from './components/bank.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={bank}>
    <App />
  </Provider>,
)
