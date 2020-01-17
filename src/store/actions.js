import { ACTION_CHANGE_INPUT_CURRENCY,
         ACTION_CHANGE_OUTPUT_CURRENCY,
         ACTION_CHANGE_INPUT_CURRENCY_VALUE,
         ACTION_GET_OUTPUT_CURRENCY_VALUE,
         ACTION_CREATE_CURRENCY_LIST } from '../index'

export const changeInputCurrency = (newInputCurrency) => {
  return {
    type: ACTION_CHANGE_INPUT_CURRENCY,
    payload: newInputCurrency
  }
}

export const changeOutputCurrency = (newOutputCurrency) => {
  return {
    type: ACTION_CHANGE_OUTPUT_CURRENCY,
    payload: newOutputCurrency
  }
}

export const createCurrencyList = (currencyList) => {
  return {
    type: ACTION_CREATE_CURRENCY_LIST,
    payload: currencyList
  }
}

export const changeInputCurrencyValue = (newInputCurrencyValue) => {
  return {
    type: ACTION_CHANGE_INPUT_CURRENCY_VALUE,
    payload: newInputCurrencyValue
  }
}

export const getOutputCurrencyValue = (newOutputCurrencyValue) => {
  return {
    type: ACTION_GET_OUTPUT_CURRENCY_VALUE,
    payload: newOutputCurrencyValue
  }
}
