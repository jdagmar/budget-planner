import React from 'react';
import { Expense, SetIncomeForm } from '../State';

type Props = {
  expenses: Array<Expense>;
  setIncomeForm: SetIncomeForm;
};

export const ExpenseSummary = (props: Props) => {
  const expenses = props.expenses.map(expense => +expense.cost);

  const sumUpExpenses = (expenses: Array<number>) => {
    return expenses.reduce((x, y) => x + y, 0);
  };

  const calcAccountBalance = (income: string = '0') => {
    return parseInt(income) - sumUpExpenses(expenses);
  };

  return (
    <div className="mt-2 font-roboto">
      <p>Sum of expenses: {sumUpExpenses(expenses)} SEK</p>
      <p>Balance: {calcAccountBalance(props.setIncomeForm.income)} SEK </p>
    </div>
  );
};
