import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      return {
        data: [...state.data, action.payload],
      };
    },
    expensesFileData: (state, action) => {
      return {
        data: [...state.data, ...action.payload],
      };
    },
  },
});

const calcRewardPoints = (expense) => {
  const amt =
    expense > 100
      ? (expense - 50) * 1 + (expense - 100) * 1
      : (expense - 50) * 1;

  return amt < 0 ? 0 : amt;
};

export const addExpense = (record) => {
  return (dispatch) =>
    dispatch(
      expensesSlice.actions.addExpense({
        ...record,
        rewardPoints: calcRewardPoints(record.expenses),
      })
    );
};

export const expensesFileData = (record) => {
  const expenses = [];
  record.data.forEach((rec) => {
    expenses.push({ ...rec, rewardPoints: calcRewardPoints(rec.expenses) });
  });

  return (dispatch) =>
    dispatch(expensesSlice.actions.expensesFileData(expenses));
};

export default expensesSlice.reducer;
