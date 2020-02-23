import React from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { AddExpenseForm, Expense } from '../State';

type Props = {
  expenseForm: AddExpenseForm;
  onSubmit: (a: Expense) => void;
  onChange: (a: AddExpenseForm) => void;
};

export const ExpenseForm = (props: Props) => {
  return (
    <form
      onSubmit={e => {
        const { cost, title, error } = props.expenseForm;

        e.preventDefault();
        if (
          cost !== undefined &&
          title !== undefined &&
          !isNaN(parseInt(cost))
        ) {
          props.onSubmit({
            cost: parseInt(cost),
            title: title,
          });
        } else {
          props.onChange({ ...props.expenseForm, error: 'not valid' });
        }
      }}
    >
      <Input
        type="text"
        label="Title"
        value={props.expenseForm.title || ''}
        onChange={newTitle =>
          props.onChange({ ...props.expenseForm, title: newTitle })
        }
      />
      <Input
        type="text"
        label="Cost"
        value={props.expenseForm.cost?.toString() || ''}
        onChange={newCost =>
          props.onChange({ ...props.expenseForm, cost: newCost })
        }
      />
      <Button text="add" />
      <p>{props.expenseForm.error}</p>
    </form>
  );
};
