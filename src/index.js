import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import { rootReducer } from './store/reducers'
import './css/main.css'
import './scss/main.scss'


export const ACTION_CHANGE_INPUT_CURRENCY = 'ACTION_CHANGE_INPUT_CURRENCY'
export const ACTION_CHANGE_OUTPUT_CURRENCY = 'ACTION_CHANGE_OUTPUT_CURRENCY'
export const ACTION_CREATE_CURRENCY_LIST = 'ACTION_CREATE_CURRENCY_LIST'
export const ACTION_CHANGE_INPUT_CURRENCY_VALUE = 'ACTION_CHANGE_INPUT_CURRENCY_VALUE'
export const ACTION_GET_OUTPUT_CURRENCY_VALUE = 'ACTION_GET_OUTPUT_CURRENCY_VALUE'

export const store = createStore(rootReducer)

render(<Provider store = { store }>
  <App />
  </Provider>, document.getElementById('root'))
