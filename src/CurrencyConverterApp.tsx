import React from 'react';
import CurrencyInput from './components/currency-input';

class CurrencyConverterApp extends React.Component {
  render() {
    return (
      <div className='mt-4'>
        <p className='text-center text-[32px] md:text-[48px]'>Currency Converter</p>
        <CurrencyInput></CurrencyInput>
      </div>
    );
  }
}

export default CurrencyConverterApp;
