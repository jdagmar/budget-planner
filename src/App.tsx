import React, { useReducer } from 'react';
import { ExpenseForm, ExpenseSummary, Header, ExpenseList } from './components';
import { Action, State } from './State';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'addExpense':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        addExpenseForm: {},
      };
    case 'UpdateExpenseForm':
      return {
        ...state,
        addExpenseForm: action.payload,
      };
  }
};

const initState: State = {
  expenses: [],
  addExpenseForm: {},
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
      <ExpenseForm
        onSubmit={expense => dispatch({ type: 'addExpense', payload: expense })}
        expenseForm={state.addExpenseForm}
        onChange={expense => {
          dispatch({ type: 'UpdateExpenseForm', payload: expense });
        }}
      />
      <ExpenseList expenses={state.expenses} />
      <ExpenseSummary expenses={state.expenses} />
    </main>
  );
};
