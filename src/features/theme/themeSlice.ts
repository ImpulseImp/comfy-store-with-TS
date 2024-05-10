import { createSlice } from '@reduxjs/toolkit';

type themeType = {
  mode: 'dark' | 'light';
};

const initialState: themeType = {
  mode: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
