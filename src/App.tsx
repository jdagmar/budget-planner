import React, { useReducer } from 'react';
import {
  ExpenseForm,
  ExpenseSummary,
  Header,
  ExpenseList,
  IncomeForm,
} from './components';
import { Action, State } from './State';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'addExpense':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        addExpenseForm: {},
      };
    case 'updateExpenseForm':
      return {
        ...state,
        addExpenseForm: action.payload,
      };
    case 'setIncome':
      const newIncome = parseInt(action.payload.income || '');

      return {
        ...state,
        income: action.payload.error ? state.income : newIncome,
        setIncomeForm: action.payload,
      };
    case 'removeExpense':
      // const updated = state.expenses.filter(item => item !== action.payload);
      return state;
  }
};

const initState: State = {
  expenses: [],
  income: undefined,
  addExpenseForm: {},
  setIncomeForm: {},
};

export const AppContext = React.createContext([
  initState,
  (() => {}) as React.Dispatch<Action>,
] as [State, React.Dispatch<Action>]);

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <main className="m-4">
      <Header />
      <IncomeForm
        setIncomeForm={state.setIncomeForm}
        onChange={income => {
          dispatch({ type: 'setIncome', payload: income });
        }}
      />
      <ExpenseForm
        onSubmit={expense => dispatch({ type: 'addExpense', payload: expense })}
        expenseForm={state.addExpenseForm}
        onChange={expense => {
          dispatch({ type: 'updateExpenseForm', payload: expense });
        }}
      />
      <ExpenseList
        expenses={state.expenses}
        onClick={event => {
          dispatch({ type: 'removeExpense', payload: event });
        }}
      />
      <ExpenseSummary
        expenses={state.expenses}
        setIncomeForm={state.setIncomeForm}
      />
    </main>
  );
};
