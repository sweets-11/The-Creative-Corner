import { configureStore, createSlice , useSelector} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isAuthenticated: false,
    },
    reducers: {
      login: (state) => {
        state.isAuthenticated = true;
      },
      logout: (state) => {
        state.isAuthenticated = false;
      },
    },
  });



  export const { login, logout } = authSlice.actions;
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
