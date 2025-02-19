import { counterReducer } from './reducers';
import userReducer from './users/reducer';
import recipesReducer from './recipes/reducer';

export default {
  counter: counterReducer,
  // recipeData: recipeDataReducer,
  // userData: userDataReducer,
  user: userReducer,
  recipes: recipesReducer,
};
