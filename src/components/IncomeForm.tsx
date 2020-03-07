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
        value={props.setIncomeForm.income?.toString() || ''}
        onChange={newIncome => {
          props.onChange({
            ...props.setIncomeForm,
            income: newIncome,
            error: isNaN(parseInt(newIncome)) ? 'not valid' : undefined,
          });
        }}
      />
      <p>{props.setIncomeForm.error}</p>
    </>
  );
};
