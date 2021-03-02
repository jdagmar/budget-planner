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
        className="flex justify-between items-center mb-4 bg-gray-100 rounded shadow-sm  pl-4"
        key={expense.title}
      >
        <p className="mr-1 w-5/12">{expense.title}</p>
        <p className="w-5/12">{expense.cost}</p>
        <Button
          text="Remove Expense"
          isTextVisible={false}
          icon="remove"
          onClick={() => props.onClick(expense.title)}
          color="none"
          fill="none"
        />
      </li>
    );
  });

  return (
    <div className="mt-8">
      <h2 className=" font-bold text-sm">Expenses</h2>
      {expenseListItems.length > 0 ? (
        <ul className="mt-3 mb-8">{expenseListItems}</ul>
      ) : (
        <p className=" mt-2 mb-5">Add an expense to get started</p>
      )}
    </div>
  );
};
