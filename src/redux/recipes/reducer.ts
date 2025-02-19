import { createReducer } from '@reduxjs/toolkit';
import {
  setFilteredRecipesListState,
  setRecipesDataStatus,
  setRecipesListState,
} from './action';

const initialState = { status: 'idle' };

const recipesReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRecipesListState, (state, action) => {
    if (action.payload) {
      state.recipesList = action.payload;
      //   state.filteredRecipesList= state.recipesList;
    }
  });
  builder.addCase(setRecipesDataStatus, (state, action) => {
    if (action.payload) {
      state.status = action.payload;
    }
  });
  builder.addCase(setFilteredRecipesListState, (state, action) => {
    if (action.payload) {
      state.filteredRecipesList = action.payload;
    }
    // console.log(state);
    // console.log(state.status);
  });
});

export default recipesReducer;
