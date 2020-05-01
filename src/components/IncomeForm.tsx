import React from 'react';
import { SetIncomeForm } from '../State';
import { Input } from './Input';

type Props = {
  setIncomeForm: SetIncomeForm;
  onChange: (a: SetIncomeForm) => void;
};

export const IncomeForm = (props: Props) => {
  return (
    <div className="flex">
      <div className="w-8/12 mr-2">
        <Input
          label="income"
          type="string"
          icon="money"
          value={props.setIncomeForm.income?.toString() || ''}
          onChange={newIncome => {
            props.onChange({
              ...props.setIncomeForm,
              income: newIncome,
              incomeFormatError: isNaN(parseInt(newIncome))
                ? 'Income should be a number'
                : undefined,
            });
          }}
        />
        <p className="text-sm text-red-700 mb-2">
          {props.setIncomeForm.incomeFormatError}
        </p>
      </div>
      <div className="w-4/12">
        <Input
          label="currency"
          type="string"
          icon="label"
          value={props.setIncomeForm.currency || ''}
          onChange={newCurrency => {
            props.onChange({
              ...props.setIncomeForm,
              currency: newCurrency,
              currencyFormatError: isNaN(parseInt(newCurrency))
                ? undefined
                : 'Income should be a string',
            });
          }}
        />
        <p className="text-sm text-red-700 mb-2">
          {props.setIncomeForm.currencyFormatError}
        </p>
      </div>
    </div>
  );
};
