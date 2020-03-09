import React from 'react';
import { Input } from './Input';
import { SetIncomeForm } from '../State';

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
            error: isNaN(parseInt(newIncome)) ? 'not valid' : undefined,
          });
        }}
      />
      <p className="text-xs text-red-500 mb-2">{props.setIncomeForm.error}</p>
    </>
  );
};
