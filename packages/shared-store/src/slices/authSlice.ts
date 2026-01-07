import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  role: "ADMIN" | "USER";
  token: string;
};

type AuthState = {
  user: User | null;
  token: any | null
};

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
