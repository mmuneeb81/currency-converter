import React from 'react';
import CurrencyInput from './components/currency-input';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { ConvertInput } from './interfaces/convertInput.interface';

class CurrencyConverterApp extends React.Component {

  handleConvert(input: ConvertInput) {
    console.log(input);
  }

  render() {
    return (
      <div className='mt-4'>
        <SpaceBetween direction="vertical" size="xxl" alignItems="center">
          <Header variant="h1">Currency Converter</Header>
          <CurrencyInput handleConvert={this.handleConvert.bind(this)}></CurrencyInput>
        </SpaceBetween>
      </div>
    );
  }
}

export default CurrencyConverterApp;
