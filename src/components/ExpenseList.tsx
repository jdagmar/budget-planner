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
      <li
        className="flex justify-between my-2 bg-gray-200 p-2 rounded font-roboto"
        key={expense.title}
      >
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
    <div className="mt-8">
      <h2 className="font-overpass uppercase text-sm">Expenses</h2>
      {expenseListItems.length > 0 ? (
        <ul className="mt-3 mb-8">{expenseListItems}</ul>
      ) : (
        <p>Add an expense to get started</p>
      )}
    </div>
  );
};
