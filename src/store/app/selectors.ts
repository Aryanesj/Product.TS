import { RootState } from '../types';

export const getTest = (state: RootState): string => state.app.test;
export const getValueString = (state: RootState): string => state.app.valueText;