import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = null | {
  email: string;
  uid: string;
};

export interface AuthorizationState {
  emailSignIn: string;
  passwordSignIn: string;
  emailSignUp: string;
  passwordSignUp: string;
  confirmPasswordSignUp: string;
  currentUser: User;
}

const initialState: AuthorizationState = {
  emailSignIn: "",
  passwordSignIn: "",
  emailSignUp: "",
  passwordSignUp: "",
  confirmPasswordSignUp: "",
  currentUser: null,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setEmailSignIn: (state, action: PayloadAction<string>) => {
      state.emailSignIn = action.payload;
    },
    setPasswordSignIn: (state, action: PayloadAction<string>) => {
      state.passwordSignIn = action.payload;
    },
    clearSignIn: (state) => {
      state.emailSignIn = "";
      state.passwordSignIn = "";
    },
    setEmailSignUp: (state, action: PayloadAction<string>) => {
      state.emailSignUp = action.payload;
    },
    setPasswordSignUp: (state, action: PayloadAction<string>) => {
      state.passwordSignUp = action.payload;
    },
    setConfirmPasswordSignUp: (state, action: PayloadAction<string>) => {
      state.confirmPasswordSignUp = action.payload;
    },
    clearSignUp: (state) => {
      state.emailSignUp = "";
      state.passwordSignUp = "";
      state.confirmPasswordSignUp = "";
    },
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const {
  setEmailSignIn,
  setPasswordSignIn,
  clearSignIn,
  setEmailSignUp,
  setPasswordSignUp,
  setConfirmPasswordSignUp,
  clearSignUp,
  setCurrentUser,
} = authorizationSlice.actions;

export default authorizationSlice.reducer;
