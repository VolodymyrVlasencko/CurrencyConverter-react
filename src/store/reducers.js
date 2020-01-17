import { ACTION_CHANGE_INPUT_CURRENCY,
         ACTION_CHANGE_OUTPUT_CURRENCY,
         ACTION_CHANGE_INPUT_CURRENCY_VALUE,
         ACTION_GET_OUTPUT_CURRENCY_VALUE,
         ACTION_CREATE_CURRENCY_LIST } from '../index'

const initialState = {
  currencyList: {},
  inputCurrency: 'EUR',
  outputCurrency: 'EUR',
  inputCurrencyValue: null,
  outputCurrencyValue: null
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_INPUT_CURRENCY:
      return { ...state, inputCurrency: action.payload };
    case ACTION_CHANGE_OUTPUT_CURRENCY:
      return { ...state, outputCurrency: action.payload };
    case ACTION_CREATE_CURRENCY_LIST:
      return { ...state, currencyList: { 'EUR': 1, ...action.payload }};
    case ACTION_CHANGE_INPUT_CURRENCY_VALUE:
      return { ...state, inputCurrencyValue: action.payload };
    case ACTION_GET_OUTPUT_CURRENCY_VALUE:
      return { ...state, outputCurrencyValue: action.payload.toFixed(1) };
  }
  return state
}
