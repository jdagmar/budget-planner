import React from 'react';
import { Expense } from '../State';

type Props = {
  expenses: Array<Expense>;
};

export const ExpenseList = (props: Props) => {
  const expenseListItems = props.expenses.map(expense => {
    return (
      <li className="flex">
        <p className="mr-1">{expense.title}</p>
        <p>{expense.cost} kr</p>
      </li>
    );
  });

  return <ul>{expenseListItems}</ul>;
};
