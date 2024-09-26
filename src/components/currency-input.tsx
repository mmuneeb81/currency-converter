import Input from "@cloudscape-design/components/input";
import React from "react";
import { CurrencyInputs } from "../constants/currencyInputs";
import { Button, Select } from "@cloudscape-design/components";
import { ConvertInput } from "../interfaces/convertInput.interface";

function CurrencyInput({ handleConvert }: any) {
    const [amount, setAmount] = React.useState("");
    const [currencyType, setCurrencyType] = React.useState(CurrencyInputs[0]);

    const onConvert = () => {
        const convertInput: ConvertInput = {
            sourceCurrency: currencyType.value,
            amount: +amount
        }
        handleConvert(convertInput);
    };

    return (
        <div className="-mt-2 md:mt-4 w-full">
            <div className='flex gap-2 md:gap-4 flex-col md:flex-row w-full'>
                <Input
                    placeholder="Enter amount..."
                    inputMode="numeric"
                    type="number"
                    onChange={({ detail }) => setAmount(detail.value)}
                    value={amount}
                />
                <Select
                    selectedOption={currencyType}
                    onChange={({ detail }) => setCurrencyType({label: detail.selectedOption.label || '', value: detail.selectedOption.value || ''})}
                    options={CurrencyInputs}
                />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4' onClick={onConvert}>Convert</button>
            </div>
        </div>
    );
}

export default CurrencyInput;