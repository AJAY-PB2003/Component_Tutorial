import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slices/counterslice';
import recipeDataReducer from './slices/recipeslice';
import { counterReducer } from './reducers';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipeData: recipeDataReducer,
  },
});
