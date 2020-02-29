import React from 'react';
import { Input } from './Input';
import { Button } from './Button';

type Props = {
  income: number;
  onChange: (a: number) => void;
};

export const IncomeForm = (props: Props) => {
  return (
    <Input
      label="income"
      type="string"
      value={props.income.toString()}
      onChange={income => props.onChange(parseInt(income))}
    />
  );
};
