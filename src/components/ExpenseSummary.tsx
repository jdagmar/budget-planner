import React from 'react';
import { Expense, SetIncomeForm } from '../State';

type Props = {
  expenses: Array<Expense>;
  currency: string | undefined;
  setIncomeForm: SetIncomeForm;
};

export const ExpenseSummary = (props: Props) => {
  const sumUpExpenses = (expenses: Array<number>) => {
    return expenses.reduce((x, y) => x + y, 0);
  };

  const calcAccountBalance = (income: string = '0') => {
    if (!isNaN(parseInt(income))) {
      return parseInt(income) - sumUpExpenses(expenses);
    }
    return 'unable to calculate';
  };

  const calcPrecentageSpent = (expenses: number, income: string = '0') => {
    return (expenses / parseInt(income)) * 100;
  };

  const expenses = props.expenses.map(expense => +expense.cost);
  const percentageSpent = calcPrecentageSpent(
    sumUpExpenses(expenses),
    props.setIncomeForm.income
  );
  const accountBalance = calcAccountBalance(props.setIncomeForm.income);

  return (
    <div className="mt-2">
      <div className="shadow w-full bg-grey-light rounded">
        <div
          className={`${
            percentageSpent > 100
              ? 'bg-red-700 text-white'
              : percentageSpent < 100
              ? 'bg-peach-600'
              : 'bg-gray-400'
          } leading-tight py-2 text-center max-w-full`}
          style={{
            width: percentageSpent + '%',
          }}
        >
          <p className="mx-2">
            {sumUpExpenses(expenses)} {props.currency}
          </p>
        </div>
      </div>

      <p className="flex justify-end items-center mt-4 text-sm">
        Remaining:
        <div
          className={`${
            accountBalance < 0 ? 'text-red-700' : ''
          } px-2 flex items-center`}
        >
          {accountBalance} {props.currency}
        </div>
      </p>
    </div>
  );
};
