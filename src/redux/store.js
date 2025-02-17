import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slices/counterslice';
import recipeDataReducer from './slices/recipeDataSlice';
import { counterReducer } from './reducers';
import userDataReducer from './slices/userDataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipeData: recipeDataReducer,
    userData:userDataReducer,
  },
});
