import React from 'react';
import { Expense } from '../State';
import { GetIcon } from '../helpers/GetIcon';

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
          {GetIcon('remove')}
          <span className="sr-only">Remove expense</span>
        </button>
      </li>
    );
  });

  return (
    <>
      <h2 className="font-mono">Expenses</h2>
      <ul>{expenseListItems}</ul>
    </>
  );
};
