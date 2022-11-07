import React,{useEffect} from 'react'
import { useState } from 'react';
import { Currency } from '../Components/Currency';

export const Home = () => {
  // let API_KEY=`3NmQxsuZDQavthhh2RlLlQxCH01TVq2b`;
  let API_KEY=`Mhy3nY52ORdI0j2sKxhNdbf0Uzgo75ET`;
  const [currencyOption,setCurrencyOption]= useState([]);
   const [fromCurrency,setFromCurrency]= useState();
   const [toCurrency,setToCurrency]= useState();
   const [exchangeRate,setExchangeRates]= useState();
  const [amount,setAmount]= useState(1);
  const [amountInFromCurrency,setAmountInFromCurrency]= useState(1);

//  console.log(exchangeRate);

let toAmount,fromAmount;
if(amountInFromCurrency){
  fromAmount=amount;
  toAmount=amount*exchangeRate;
}
else{
  toAmount= amount;
  fromAmount=amount/exchangeRate;
}
  
 
const handleFromChange=(e)=>{
  setAmount(e.target.value);
  setAmountInFromCurrency(true);
}

const handleToChange=(e)=>{
   setAmount(e.target.value);
   setAmountInFromCurrency(false);
}

 let myApiKey= new Headers();
 myApiKey.append('apikey',API_KEY);
  let  requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myApiKey
  };
useEffect(()=>{
  fetch(`https://api.apilayer.com/exchangerates_data/latest?base=USD`, requestOptions)
  .then(res => res.json())
  .then(data =>{
    let firstCurr=Object.keys(data.rates)[0];
    setCurrencyOption([data.base,...Object.keys(data.rates)]);
    setFromCurrency(data.base);
    setToCurrency(firstCurr);
    setExchangeRates(data.rates[firstCurr]);
  })
  .catch(error => console.log('error', error));
},[])



  return (
    <div>
      <h1> Currency Converter</h1>
          
          <div>
            <Currency 
            currencyOption={currencyOption}  
            selectedCurrency={fromCurrency}
            onChangeCurrency={e=>setFromCurrency(e.target.value)}
            onChangeAmount={handleFromChange} 
             amount={fromAmount}
             />
             <p>=</p>
             <Currency 
             currencyOption={currencyOption} 
             selectedCurrency={toCurrency}
             onChangeCurrency={e=>setToCurrency(e.target.value)} 
             onChangeAmount={handleToChange}
             amount={toAmount}
             />
          </div>
    </div>
  )
}




// curl --request GET 'https://api.apilayer.com/currency_data/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01' \
// --header 'apikey: YOUR API KEY'