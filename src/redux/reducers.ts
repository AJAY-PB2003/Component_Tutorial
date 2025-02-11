import { createReducer } from '@reduxjs/toolkit';
import { increment } from './actions';
import { decrement } from './actions';

//Counter Reducer
const initialState = { value: 0 };
export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++;
    })
    .addCase(decrement, (state) => {
      state.value--;
    });
});
