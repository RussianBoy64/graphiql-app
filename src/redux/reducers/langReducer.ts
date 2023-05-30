import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: localStorage.getItem('lang') === 'ru' ? 'ru' : 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      localStorage.setItem('lang', action.payload);
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
