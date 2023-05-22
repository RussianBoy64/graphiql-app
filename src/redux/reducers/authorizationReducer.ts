import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthorizationState {
  emailSignIn: string;
  passwordSignIn: string;
  emailSignUp: string;
  passwordSignUp: string;
  confirmPasswordSignUp: string;
}

const initialState: AuthorizationState = {
  emailSignIn: "",
  passwordSignIn: "",
  emailSignUp: "",
  passwordSignUp: "",
  confirmPasswordSignUp: "",
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
    setEmailSignUp: (state, action: PayloadAction<string>) => {
      state.emailSignUp = action.payload;
    },
    setPasswordSignUp: (state, action: PayloadAction<string>) => {
      state.passwordSignUp = action.payload;
    },
    setConfirmPasswordSignUp: (state, action: PayloadAction<string>) => {
      state.confirmPasswordSignUp = action.payload;
    },
  },
});

export const {
  setEmailSignIn,
  setPasswordSignIn,
  setEmailSignUp,
  setPasswordSignUp,
  setConfirmPasswordSignUp,
} = authorizationSlice.actions;

export default authorizationSlice.reducer;
