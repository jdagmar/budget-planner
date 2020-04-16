import React from 'react';
import { Expense } from '../State';
import { Button } from '../components/Button';

type Props = {
  expenses: Array<Expense>;
  onClick: (expense: string) => void;
};

export const ExpenseList = (props: Props) => {
  const expenseListItems = props.expenses.map(expense => {
    return (
      <li
        className="flex justify-between items-center my-2 bg-gray-200 rounded font-roboto pl-4"
        key={expense.title}
      >
        <p className="mr-1">{expense.title}</p>
        <p>{expense.cost}</p>
        <div className="max-w-sm">
          <Button
            text="Remove Expense"
            isTextVisible={false}
            icon="remove"
            onClick={() => props.onClick(expense.title)}
            color="none"
            fill="none"
          />
        </div>
      </li>
    );
  });

  return (
    <div className="mt-8">
      <h2 className="font-overpass uppercase text-sm">Expenses</h2>
      {expenseListItems.length > 0 ? (
        <ul className="mt-3 mb-8">{expenseListItems}</ul>
      ) : (
        <p className="font-roboto mt-2 mb-5">Add an expense to get started</p>
      )}
    </div>
  );
};
