import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeInputCurrency,
         changeOutputCurrency,
         changeInputCurrencyValue,
         getOutputCurrencyValue,
         createCurrencyList } from '../store/actions'


class App extends Component {

  componentDidMount() {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(res => res.json())
      .then(data => {
        this.props.createCurrencyList(data.rates)
      })
      .catch(error => console.log(error))
  }

  render() {
    const currencys = []

    for (let key in this.props.currencyList) {
      currencys.push(key);
    }

    const currencyList = currencys.map((currency, index) => {
      return ( <option key = { index }>{ currency }</option> )
    })

    return (
      <div className = 'container'>
        <h2 className = 'header'>Currency Converter</h2>
        <select className = '1stcurrency' onChange = { (event) => {
          Promise.resolve(this.props.changeInputCurrency(event.target.value))
          .then(action => {
            let outputValue = this.props.inputCurrencyValue * this.props.currencyList[this.props.outputCurrency] / this.props.currencyList[action.payload]
            this.props.getOutputCurrencyValue(outputValue)
          })
        } }>
          { currencyList }
        </select>
        <input
          className = 'inputField'
          type = 'text'
          placeholder = 'Amount'
          onChange = { (event) => {
            this.props.changeInputCurrencyValue(event.target.value);
            let outputValue = +event.target.value * this.props.currencyList[this.props.outputCurrency] / this.props.currencyList[this.props.inputCurrency]
            this.props.getOutputCurrencyValue(outputValue)
          } }/>
        <select className = '2ndcurrency' onChange = { (event) => {
          Promise.resolve(this.props.changeOutputCurrency(event.target.value))
          .then(action => {
            let outputValue = this.props.inputCurrencyValue * this.props.currencyList[action.payload] / this.props.currencyList[this.props.inputCurrency]
            this.props.getOutputCurrencyValue(outputValue)
          })
        } }>
          { currencyList }
        </select>
        <span className = 'outputField'>
          { this.props.outputCurrencyValue }
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputCurrency: state.inputCurrency,
    outputCurrency: state.outputCurrency,
    inputCurrencyValue: state.inputCurrencyValue,
    outputCurrencyValue: state.outputCurrencyValue,
    currencyList: state.currencyList
  }
}

const putActionsToProps = (dispatch) => {
  return {
    changeInputCurrency: bindActionCreators(changeInputCurrency, dispatch),
    changeOutputCurrency: bindActionCreators(changeOutputCurrency, dispatch),
    createCurrencyList: bindActionCreators(createCurrencyList, dispatch),
    changeInputCurrencyValue: bindActionCreators(changeInputCurrencyValue, dispatch),
    getOutputCurrencyValue: bindActionCreators(getOutputCurrencyValue, dispatch)
  }
}

export default connect(mapStateToProps, putActionsToProps)(App)
