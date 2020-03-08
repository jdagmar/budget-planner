import React from 'react';
import { Expense } from '../State';
import { RemoveIcon } from './Icons';

type Props = {
  expenses: Array<Expense>;
  onClick: (expense: string) => void;
};

export const ExpenseList = (props: Props) => {
  const expenseListItems = props.expenses.map(expense => {
    return (
      <li className="flex justify-between my-2" key={expense.title}>
        <p className="mr-1">{expense.title}</p>
        <p>{expense.cost} kr</p>
        <button onClick={() => props.onClick(expense.title)}>
          <RemoveIcon />
          <span className="sr-only">Remove expense</span>
        </button>
      </li>
    );
  });

  return <ul>{expenseListItems}</ul>;
};
