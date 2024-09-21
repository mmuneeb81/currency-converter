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
        <div>
            <div className='flex gap-4'>
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
                <Button variant="primary" onClick={onConvert}>Convert</Button>
            </div>
        </div>
    );
}

export default CurrencyInput;