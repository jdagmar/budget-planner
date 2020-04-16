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
    <div className="flex flex-col p-4 absolute bottom-0 z-50 w-full bg-gray-200">
      <form
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
            props.onChange({
              ...props.expenseForm,
              error:
                'Make sure that the expense you want to add both have a title and a cost, which has to be a number',
            });
          }
        }}
      >
        <p className="flex text-xs text-red-500 mb-4">
          {props.expenseForm.error}
        </p>

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
          <div className="flex mt-4">
            <Button text="add" isTextVisible={true} color="blue" fill="solid" />
            <Button
              text="Cancel"
              isTextVisible={true}
              onClick={props.onClick}
              color="blue"
              fill="outline"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
