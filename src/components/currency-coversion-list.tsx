import React from 'react';
import { CurrencyLabels } from '../constants/currencyLabels';
import { CurrencyInputs } from '../constants/currencyInputs';
import ReactCountryFlag from "react-country-flag"

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
            {Object.entries(filteredRates).map(([key, value]) => (<div className='mt-1 md:mt-4'>
                <table className='w-full text-left text-lg'>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className='py-1'>
                            <ReactCountryFlag countryCode="US" svg />
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