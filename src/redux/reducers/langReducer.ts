import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state = action.payload;
      localStorage.setItem('lang', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
