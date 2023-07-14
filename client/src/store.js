import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    pic : localStorage.getItem("pic"),
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

    profile: (state, action) => {
      const { pic } = action.payload;
      state.pic = localStorage.setItem('pic', pic);
    }

  },
});

export const { login, logout,profile} = authSlice.actions;
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
