import { createSlice } from "@reduxjs/toolkit";

export type Theme = "dark" | "light" | "system";

const initialState = {
  name: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
