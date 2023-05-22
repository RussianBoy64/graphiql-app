import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./reducers/authorizationReducer";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    login: authorizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypeDispatch: () => AppDispatch = useDispatch;
