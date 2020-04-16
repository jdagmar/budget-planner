import React from 'react';
import { SetIncomeForm } from '../State';
import { Input } from './Input';

type Props = {
  setIncomeForm: SetIncomeForm;
  onChange: (a: SetIncomeForm) => void;
};

export const IncomeForm = (props: Props) => {
  return (
    <>
      <Input
        label="income"
        type="string"
        icon="money"
        value={props.setIncomeForm.income?.toString() || ''}
        onChange={newIncome => {
          props.onChange({
            ...props.setIncomeForm,
            income: newIncome,
            error: isNaN(parseInt(newIncome))
              ? 'Income should be a number'
              : undefined,
          });
        }}
      />
      <p className="text-sm text-red-700  mb-2">{props.setIncomeForm.error}</p>
    </>
  );
};
