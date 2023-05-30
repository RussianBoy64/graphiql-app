import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = null | {
  email: string;
  uid: string;
};

export interface AuthorizationState {
  emailSignIn: string;
  isEmailSignInValid: boolean;
  passwordSignIn: string;
  isPasswordSignInValid: boolean;
  emailSignUp: string;
  isEmailSignUpValid: boolean;
  passwordSignUp: string;
  isPasswordSignUpValid: boolean;
  confirmPasswordSignUp: string;
  isConfirmPasswordSignUpValid: boolean;
  currentUser: User;
}

const initialState: AuthorizationState = {
  emailSignIn: "",
  isEmailSignInValid: true,
  passwordSignIn: "",
  isPasswordSignInValid: true,
  emailSignUp: "",
  isEmailSignUpValid: true,
  passwordSignUp: "",
  isPasswordSignUpValid: true,
  confirmPasswordSignUp: "",
  isConfirmPasswordSignUpValid: true,
  currentUser: null,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setEmailSignIn: (state, action: PayloadAction<string>) => {
      state.emailSignIn = action.payload;
    },
    setEmailSignInValidity: (state, action: PayloadAction<boolean>) => {
      state.isEmailSignInValid = action.payload;
    },
    setPasswordSignIn: (state, action: PayloadAction<string>) => {
      state.passwordSignIn = action.payload;
    },
    setPasswordSignInValidity: (state, action: PayloadAction<boolean>) => {
      state.isPasswordSignInValid = action.payload;
    },
    clearSignIn: (state) => {
      state.emailSignIn = "";
      state.passwordSignIn = "";
    },
    setEmailSignUp: (state, action: PayloadAction<string>) => {
      state.emailSignUp = action.payload;
    },
    setEmailSignUpValidity: (state, action: PayloadAction<boolean>) => {
      state.isEmailSignUpValid = action.payload;
    },
    setPasswordSignUp: (state, action: PayloadAction<string>) => {
      state.passwordSignUp = action.payload;
    },
    setPasswordSignUpValidity: (state, action: PayloadAction<boolean>) => {
      state.isPasswordSignUpValid = action.payload;
    },
    setConfirmPasswordSignUp: (state, action: PayloadAction<string>) => {
      state.confirmPasswordSignUp = action.payload;
    },
    setConfirmPasswordSignUpValidity: (state, action: PayloadAction<boolean>) => {
      state.isConfirmPasswordSignUpValid = action.payload;
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
  setEmailSignInValidity,
  setPasswordSignIn,
  setPasswordSignInValidity,
  clearSignIn,
  setEmailSignUp,
  setEmailSignUpValidity,
  setPasswordSignUp,
  setPasswordSignUpValidity,
  setConfirmPasswordSignUp,
  setConfirmPasswordSignUpValidity,
  clearSignUp,
  setCurrentUser,
} = authorizationSlice.actions;

export default authorizationSlice.reducer;
