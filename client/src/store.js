import { configureStore, createSlice, useSelector } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
  },
  reducers: {
    login: (state, action) => {
      const { name, email } = action.payload;
      state.name = localStorage.setItem('name', name);
      state.email = localStorage.setItem('email', email);
    },
    logout: (state) => {
      state.name = localStorage.removeItem('name');
      state.email = localStorage.removeItem('email');
      localStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
