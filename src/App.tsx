import React, { useReducer } from 'react';
import {
  ExpenseForm,
  ExpenseSummary,
  Header,
  ExpenseList,
  IncomeForm,
  Button,
} from './components';
import { Action, State } from './State';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'addExpense':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        isExpenseFormVisible: false,
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
      const updatedExpenseList = state.expenses.filter(
        expense => expense.title !== action.payload
      );

      return {
        ...state,
        expenses: updatedExpenseList,
      };
    case 'ToggleExpenseFormVisibility':
      return {
        ...state,
        isExpenseFormVisible: action.payload,
      };
  }
};

const initState: State = {
  expenses: [],
  isExpenseFormVisible: false,
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
    <main className="h-full flex justify-between flex-col">
      <div className="m-4">
        <Header />
        <IncomeForm
          setIncomeForm={state.setIncomeForm}
          onChange={income => {
            dispatch({ type: 'setIncome', payload: income });
          }}
        />
        <ExpenseList
          expenses={state.expenses}
          onClick={expense => {
            dispatch({ type: 'removeExpense', payload: expense });
          }}
        />
        <ExpenseSummary
          expenses={state.expenses}
          setIncomeForm={state.setIncomeForm}
        />
      </div>

      <div>
        <Button
          text="New Expense"
          classes="absolute bottom-0 right-0 m-4"
          color="swampGreen"
          onClick={() => {
            dispatch({
              type: 'ToggleExpenseFormVisibility',
              payload: !state.isExpenseFormVisible,
            });
          }}
        />

        {state.isExpenseFormVisible && (
          <ExpenseForm
            onSubmit={expense =>
              dispatch({ type: 'addExpense', payload: expense })
            }
            expenseForm={state.addExpenseForm}
            onChange={expense => {
              dispatch({ type: 'updateExpenseForm', payload: expense });
            }}
            onClick={() => {
              dispatch({
                type: 'ToggleExpenseFormVisibility',
                payload: !state.isExpenseFormVisible,
              });
            }}
          />
        )}
      </div>
    </main>
  );
};
