import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  signedIn: boolean;
}

const initialState = {
  signedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  }
});