import { put, takeLatest, call, select, takeEvery } from 'redux-saga/effects';
import { apiCallFn } from '../../utils/apiCallFn';
import API_STATUS from '../../const/apiStatus';
import { recipesApi } from '../../const/apiUrl';
import {
  deleteRecipe,
  fetchRecipes,
  filterRecipes,
  setFilteredRecipesListState,
  setRecipesDataStatus,
  setRecipesListState,
} from './action';
import { recipeCardDataParser } from '../../utils/parser/recipeCardDataParser';

function* fetchRecipes$() {
  yield put(setRecipesDataStatus(API_STATUS.PENDING));
  try {
    const apiResponse = yield call(apiCallFn, recipesApi, {
      // method:'POST',body:'hello'
      params: {
        limit: 0,
      },
    });
    // console.log(apiResponse);
    const recipeCardDataList = yield call(recipeCardDataParser, apiResponse);
    // console.log('recipeAPI called');
    yield put(setRecipesListState(recipeCardDataList));
    yield put(setFilteredRecipesListState(recipeCardDataList));

    yield put(setRecipesDataStatus(API_STATUS.SUCCEEDED));
  } catch (error) {
    yield put(setRecipesDataStatus(API_STATUS.ERROR));
  }
}

function* filterRecipes$(action) {
  const state = yield select();
  const text = action.payload;
  //   console.log(text);
  const filteredData = yield state.recipes.recipesList?.filter((item) =>
    item.title.toLowerCase().startsWith(text?.toLowerCase()),
  );
  yield put(setFilteredRecipesListState(filteredData));
}

function* deleteRecipe$(action) {
  // console.log(action);
  const state = yield select();
  const updatedRecipesList = state.recipes.recipesList.filter(
    (obj) => obj.id !== action.payload,
  );
  const updatedFilteredRecipesList = state.recipes.filteredRecipesList.filter(
    (obj) => obj.id !== action.payload,
  );
  // console.log(filteredList);
  yield put(setRecipesListState(updatedRecipesList));
  yield put(setFilteredRecipesListState(updatedFilteredRecipesList));
}

export default function* rootSaga() {
  yield takeLatest(fetchRecipes, fetchRecipes$);
  yield takeLatest(filterRecipes, filterRecipes$);
  yield takeEvery(deleteRecipe, deleteRecipe$);
}
