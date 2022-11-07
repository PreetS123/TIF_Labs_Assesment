import React from 'react';
import {nanoid} from 'nanoid';

export const Currency = (props) => {
    const {
        currencyOption,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
      } = props
  return (
    <div>
        <div>
        <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOption?.map(option => (
          <option key={nanoid()} value={option}>{option}</option>
        ))}
      </select>
        </div>
    </div>
  )
}

