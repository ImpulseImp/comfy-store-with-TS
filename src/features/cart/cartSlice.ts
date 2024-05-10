import { createSlice } from '@reduxjs/toolkit';

type stateType = {
  name: string;
  total: number;
  amount: number;
};

const initialState: stateType = {
  name: 'cart slice',
  total: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state) => {
      state.amount += 1;
    },
  },
});

export const { increase } = cartSlice.actions;

export default cartSlice.reducer;
