import React from 'react';
import CurrencyInput from './components/currency-input';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { ConvertInput } from './interfaces/convertInput.interface';
import CurrencyConversionList from './components/currency-coversion-list';

class CurrencyConverterApp extends React.Component {
  state = {
    rates: {},
    convertInput: {}
  };

  async handleConvert(input: ConvertInput) {
    this.setState({
      convertInput: input
    });
    if (Object.keys(this.state.rates).length === 0) {
      this.setState({ rates: {} });
      const response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_EXCHANGE_RATES_API_KEY}`);
      const result = await response.json();
      this.setState({
        rates: result.rates
      })
    }
  }

  render() {
    return (
      <div className='mt-4 w-full'>
        <SpaceBetween direction="vertical" size="xxl" alignItems="center">
          <Header variant="h1">Currency Converter</Header>
          <CurrencyInput handleConvert={this.handleConvert.bind(this)}></CurrencyInput>
          <div className='w-full'>
            <CurrencyConversionList rates={this.state.rates} input={this.state.convertInput}></CurrencyConversionList>
          </div>
        </SpaceBetween>
      </div>
    );
  }
}

export default CurrencyConverterApp;
