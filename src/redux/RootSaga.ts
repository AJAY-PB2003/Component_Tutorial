import { all } from 'redux-saga/effects';
import userSaga from './users/saga';
import recipesSaga from './recipes/saga';

export default function* rootSaga(): Generator {
  yield all([userSaga(), recipesSaga()]);
}
