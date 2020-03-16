import React from 'react';
import { AddExpenseForm, Expense } from '../State';
import { Button } from './Button';
import { Input } from './Input';

type Props = {
  expenseForm: AddExpenseForm;
  onSubmit: (a: Expense) => void;
  onChange: (a: AddExpenseForm) => void;
  onClick: () => void;
};

export const ExpenseForm = (props: Props) => {
  return (
    <div className="p-4 absolute bottom-0 z-50 w-full bg-gray-200">
      <div className="absolute right-0 pr-4">
        <Button
          text="Close"
          isTextVisible={false}
          icon="close"
          onClick={props.onClick}
        />
      </div>

      <form
        className="mt-4"
        onSubmit={e => {
          const { cost, title } = props.expenseForm;

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
        <div className="flex justify-between flex-col">
          <Input
            type="text"
            label="Title"
            value={props.expenseForm.title || ''}
            icon="label"
            onChange={newTitle =>
              props.onChange({ ...props.expenseForm, title: newTitle })
            }
          />
          <Input
            type="text"
            label="Cost"
            icon="money"
            value={props.expenseForm.cost?.toString() || ''}
            onChange={newCost =>
              props.onChange({ ...props.expenseForm, cost: newCost })
            }
          />
          <Button text="add" isTextVisible={true} color="swampGreen" />
        </div>
        <p className="text-xs text-red-500 mb-2">{props.expenseForm.error}</p>
      </form>
    </div>
  );
};
