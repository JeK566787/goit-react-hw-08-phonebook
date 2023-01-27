import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,

  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // register
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   login
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        console.log(payload.user);
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   logout
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   refresh
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isRefreshing = false;
      });
  },
  // {
  //     [register.fulfilled](state, action) {
  //       state.user = action.payload.user;

  //       state.isLoggedIn = true;
  //     },
  //     [logIn.fulfilled](state, action) {
  //       state.user = action.payload.user;

  //       state.isLoggedIn = true;
  //     },
  //     [logOut.fulfilled](state) {
  //       state.user = { name: null, email: null };

  //       state.isLoggedIn = false;
  //     },
  //     [refreshUser.pending](state) {
  //       state.isRefreshing = true;
  //     },
  //     [refreshUser.fulfilled](state, action) {
  //       state.user = action.payload;
  //       state.isLoggedIn = true;
  //       state.isRefreshing = false;
  //     },
  //     [refreshUser.rejected](state) {
  //       state.isRefreshing = false;
  //     },
  //   },
});

export const authReducer = authSlice.reducer;
