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

  console.log(expenses);

  return (
    <div>
      <p>Sum of expenses: {calc(expenses)}</p>
    </div>
  );
};
