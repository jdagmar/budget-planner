import React from 'react';
import { Expense } from '../State';

type Props = {
  expenses: Array<Expense>;
};

export const ExpenseSummary = (props: Props) => {
  const expenses = props.expenses.map(expense => +expense.cost);

  const calc = (expenses: Array<number>) => {
    return expenses.reduce((x, y) => x + y, 0);
  };

  return (
    <div className="mt-2">
      <p>Sum of expenses: {calc(expenses)} SEK</p>
    </div>
  );
};
