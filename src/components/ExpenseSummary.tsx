import React from 'react';
import { Expense, SetIncomeForm } from '../State';
import { GetIcon } from '../helpers/GetIcon';

type Props = {
  expenses: Array<Expense>;
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
    <div className="mt-2 font-overpass">
      <div className="shadow w-full bg-grey-light rounded">
        <div
          className={`${
            percentageSpent > 100
              ? 'bg-red-500'
              : percentageSpent < 100
              ? 'bg-peach-500'
              : 'bg-gray-400'
          } text-xs leading-none py-2 text-center max-w-full`}
          style={{
            width: percentageSpent + '%',
          }}
        >
          <p className="mx-2">{sumUpExpenses(expenses)}</p>
        </div>
      </div>

      <p className="flex justify-end items-center mt-4 text-sm">
        Total:
        <span
          className={`${
            accountBalance < 0 ? 'text-red-700' : ''
          } px-2 flex items-center`}
        >
          <span>{accountBalance}</span>
          <span>{accountBalance < 0 && GetIcon('error', 'ml-2')}</span>
        </span>
      </p>
    </div>
  );
};
