import { createSlice } from '@reduxjs/toolkit';

const initialState: themeType = {
  name: 'user slice',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
