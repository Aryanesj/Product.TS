import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './types';

const initialState: AppState = {
  test: 'Test Redux',
  valueText: 'Test Tollkit',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    },
    setValue: (state, action: PayloadAction<string>) => {
    	state.valueText = action.payload;
    }
  },
});
