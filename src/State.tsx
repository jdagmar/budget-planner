export type Expense = {
  title: string;
  cost: number;
};

export type Action =
  | AddExpenseAction
  | UpdateExpenseFormAction
  | SetIncome
  | UpdateIncome;

export type AddExpenseAction = {
  type: 'addExpense';
  payload: Expense;
};

export type UpdateExpenseFormAction = {
  type: 'UpdateExpenseForm';
  payload: AddExpenseForm;
};

export type SetIncome = {
  type: 'setIncome';
  payload: number;
};

export type UpdateIncome = {
  type: 'updateIncome';
  payload: number;
};

export type AddExpenseForm = {
  title?: string;
  cost?: string;
  error?: string;
};

export type State = {
  expenses: Array<Expense>;
  addExpenseForm: AddExpenseForm;
  income: number;
};
