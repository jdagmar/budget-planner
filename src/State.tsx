export type Expense = {
  title: string;
  cost: number;
};

export type Action =
  | AddExpenseAction
  | UpdateExpenseFormAction
  | SetIncomeAction
  | RemoveExpenseAction
  | ToggleExpenseFormVisibilityAction;

export type AddExpenseAction = {
  type: 'addExpense';
  payload: Expense;
};

export type UpdateExpenseFormAction = {
  type: 'updateExpenseForm';
  payload: AddExpenseForm;
};

export type SetIncomeAction = {
  type: 'setIncome';
  payload: SetIncomeForm;
};

export type RemoveExpenseAction = {
  type: 'removeExpense';
  payload: string;
};

export type ToggleExpenseFormVisibilityAction = {
  type: 'ToggleExpenseFormVisibility';
  payload: boolean;
};

export type SetIncomeForm = {
  income?: string;
  incomeFormatError?: string;
  currency?: string;
  currencyFormatError?: string;
};

export type AddExpenseForm = {
  title?: string;
  cost?: string;
  error?: string;
};

export type State = {
  income: number | undefined;
  currency: string | undefined;
  expenses: Array<Expense>;
  addExpenseForm: AddExpenseForm;
  setIncomeForm: SetIncomeForm;
  isExpenseFormVisible: boolean;
};
