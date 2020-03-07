import React from 'react';
import { Expense } from '../State';

type Props = {
  expenses: Array<Expense>;
  onClick: (expense: string) => void;
};

export const ExpenseList = (props: Props) => {
  const expenseListItems = props.expenses.map(expense => {
    return (
      <li className="flex justify-between my-2">
        <p className="mr-1">{expense.title}</p>
        <p>{expense.cost} kr</p>
        <button onClick={e => props.onClick(e.currentTarget.innerText)}>
          Remove
        </button>
      </li>
    );
  });

  return <ul>{expenseListItems}</ul>;
};
