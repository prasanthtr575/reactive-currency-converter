import React from "react";

import { CURRENCIES } from './Currencies';

export default class CurrencyConverter extends React.Component {
  render() {
    const currencyOptions = CURRENCIES.map((currency, index) => {
      return <option value={currency.value} key={index}>{currency.name}</option>
    });

    return (
      <div>
        <div>
          <label>$100 equals Rs. 6400/-</label>
        </div>
        <div>
          <select name="fromCurrency">{currencyOptions}</select>
          to
          <select name="fromCurrency">{currencyOptions}</select>
        </div>
        <div>
          <input/>
        </div>
      </div>
      );
  }
}
