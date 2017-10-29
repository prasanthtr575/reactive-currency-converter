import React from "react";
import { CURRENCIES } from './Currencies';

export default class CurrencyConverter extends React.Component {
  constructor() {
    super();
    this.state = {
      fromCurrency: "USD",
      toCurrency: "INR",
      moneyValue: 0,
      toMoneyValue: 0
    }
  }

  changeFromCurrency(event) {
    let currency = event.target.value;

    this.setState({
      fromCurrency: currency
    });
  }

  changeToCurrency(event) {
    let currency = event.target.value;

    this.setState({
      toCurrency: currency
    });
  }

  changeMoneyValue(event) {
    let moneyValue = event.target.value;

    this.setState({
      moneyValue: moneyValue
    });
  }

  convertCurrency(money, fromCurrency, toCurrency) {
    let base = fromCurrency;
    let symbols = fromCurrency + ',' + toCurrency;
    let url = "http://api.fixer.io/latest?base=" + fromCurrency + "&symbols=" + symbols;

    fetch(url)
      .then(response => response.json().then(currencyConvertion => {
        let toMoneyValue = money * currencyConvertion.rates[toCurrency];

        this.setState({
          toMoneyValue: toMoneyValue
        });
      }))
      .catch(function(error) {
        debugger;
      // This is where you run code if the server returns any errors
      });

  //return convertedMoney;
  }

  render() {
    const currencyOptions = CURRENCIES.map((currency, index) => {
      return <option value={currency.value} key={index}>{currency.name}</option>
    });

    return (
      <div>
        <div>
          <label>
            {this.state.moneyValue} {this.state.fromCurrency} equals {
      this.convertCurrency(
        this.state.moneyValue,
        this.state.fromCurrency,
        this.state.toCurrency
      )
      } {this.state.toCurrency} {this.state.toMoneyValue}</label>
        </div>
        <div>
          <select
      name="fromCurrency"
      onChange={this.changeFromCurrency.bind(this)}
      value={this.state.fromCurrency}> {currencyOptions} </select>
          to
          <select
      name="fromCurrency"
      onChange={this.changeToCurrency.bind(this)}
      value={this.state.toCurrency}> {currencyOptions} </select>
        </div>
        <div>
          <input value={this.state.moneyValue} onChange={this.changeMoneyValue.bind(this)}/>
        </div>
      </div>
      );
  }
}
