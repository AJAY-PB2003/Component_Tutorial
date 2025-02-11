import { createSlice } from '@reduxjs/toolkit';
import apiFetchingThunk from '../../utils/apiFetchingThunk';
import API_STATUS from '../../const/apiStatus';
import { recipesApi } from '../../const/apiUrl';

// export const fetchRecipes = createAsyncThunk(
//   'recipes/fetchRecipes',
//   async () => {
//     const response = await fetch('https://dummyjson.com/recipes?limit=0');
//     const data = await response.json();
//     return data.recipes;
//   },
// );
export const fetchRecipes = apiFetchingThunk(
  'recipes/fetchRecipes',
  recipesApi,
);
export const searchFilterHandler = (text) => (dispatch, getState) => {
  const state = getState();
  // console.log(state);
  const filteredData = state.recipeData.recipesList?.filter((item) =>
    item.name.toLowerCase().startsWith(text?.toLowerCase()),
  );
  // console.log(filteredData);
  dispatch(filterList(filteredData));
};

const initialState = {
  recipesList: [],
  filteredList: [],
  status: 'idle',
};

export const recipeDataSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    filterList: (state, action) => {
      // console.log(action.payload);
      state.filteredList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state, action) => {
        state.status = API_STATUS.PENDING;
        // console.log('Pending State');
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = API_STATUS.SUCCEEDED;
        state.recipesList.push(...action.payload.recipes);
        state.filteredList = state.recipesList;
        // console.log(state.recipesList);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = API_STATUS.ERROR;
      });
  },
});

export const { filterList } = recipeDataSlice.actions;

// export const selectRecipes = (state) => state.recipeData.recipesList;
export const selectStatus = (state) => state.recipeData.status;
export const selectFilteredRecipes = (state) => state.recipeData.filteredList;

export default recipeDataSlice.reducer;
