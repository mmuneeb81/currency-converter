import React from 'react';
import { CurrencyLabels } from '../constants/currencyLabels';
import { CurrencyInputs } from '../constants/currencyInputs';
import ReactCountryFlag from "react-country-flag"
import { FlagLabels } from '../constants/flagLabels';

function CurrencyConversionList({ rates, input } :any) {
    const inputRate: number = +(input.amount/rates[input.sourceCurrency]);
    const allowed = CurrencyInputs.map(input => input.value).filter(sym => sym !== input.sourceCurrency);
    const filteredRates = Object.keys(rates)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
            return {
            ...obj,
            [key]: rates[key]
            };
        }, {});

    return (
        <div className='w-full'>
            {Object.entries(filteredRates).map(([key, value]) => (<div className='md:mt-2'>
                <table className='w-[98%] md:w-full text-left text-lg'>
                    <tr className="bg-white border-b bg-gray-200">
                        <td className='py-1 px-3'>
                            <ReactCountryFlag 
                                style={{
                                    fontSize: '2em',
                                    lineHeight: '2em'
                                }}
                                countryCode={FlagLabels[key]} svg 
                            />
                        </td>
                        <td className='px-6 py-1'>
                            {CurrencyLabels[key]}
                        </td>
                        <td className='px-6 py-1 text-end tracking-wider'>
                            {(inputRate * (value as number)).toFixed(2)}
                        </td>
                    </tr>
                </table>
            </div>))}
        </div>
    );
}

export default CurrencyConversionList;