import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCallFn } from '../../utils/apiCallFn';
import API_STATUS from '../../const/apiStatus';
import { recipesApi } from '../../const/apiUrl';
import { recipeCardDataParser } from '../../utils/parser/recipeCardDataParser';

const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  // api call
  // console.log('fetch recipes calling');
  const apiResponse = await apiCallFn(recipesApi, {
    // method:'POST',body:'hello'
    params: {
      limit: 0,
    },
  });

  // parser
  const recipeCardDataList = recipeCardDataParser(apiResponse);
  // console.log(recipeCardDataList);

  // return data
  // console.log(apiResponse);
  return recipeCardDataList;
});

const searchFilterHandler = (text) => (dispatch, getState) => {
  const state = getState();
  // console.log(state);
  const filteredData = state.recipeData.recipesList?.filter((item) =>
    item.title.toLowerCase().startsWith(text?.toLowerCase()),
  );
  // console.log(filteredData);
  dispatch(filterListSetter(filteredData));
};

const initialState = {
  recipesList: [],
  filteredList: [],
  status: 'idle',
};

const recipeDataSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    filterListSetter: (state, action) => {
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
        state.recipesList = action.payload;
        state.filteredList = state.recipesList;
        // console.log(state.recipesList);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = API_STATUS.ERROR;
      });
  },
});

const { filterListSetter } = recipeDataSlice.actions;

export { filterListSetter, fetchRecipes, searchFilterHandler };

export default recipeDataSlice.reducer;
