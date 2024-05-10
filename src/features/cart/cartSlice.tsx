import { createSlice } from '@reduxjs/toolkit';

type stateType = {
  name: string;
  total: number;
  amount: number;
};

const initialState: stateType = {
  name: 'Cart',
  total: 0,
  amount: 10,
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
