import { put, takeLatest, call, select, takeEvery } from 'redux-saga/effects';
import {
  deleteUser,
  fetchUsers,
  setUserDataStatus,
  setUserListState,
} from './action';
import { apiCallFn } from '../../utils/apiCallFn';
import API_STATUS from '../../const/apiStatus';
import { usersApi } from '../../const/apiUrl';
import { userCardDataParser } from '../../utils/parser/userCardDataParser';

// function* helloSaga() {
//   console.log('Hello Sagas!');
// }
// function* incrementAsync() {
//   yield delay(1000);
//   yield put({ type: 'counter/increment' });
// }

// function* testGenerator$(arg1, arg2, arg3) {
//   console.log('at testGenerator', arg1, arg2, arg3);
//   yield delay(arg1);
//   yield delay(arg2);
//   yield delay(arg3);
// }

// function* asyncSaga$() {
//   console.log('at shail 5555');
//   yield delay(3000);
//   console.log('at shail: 111');
// }

// function* asyncSaga2$() {
//   yield put(setUserState({ name: 'Ajay' }));
//   yield put(setUserListState([{ name: 'Ajay' }, { name: 'Shailesh' }]));
//   // console.log('at shail 2222');
//   // const apiRes = yield call(apiCallFn, 'test', 'test');
//   // console.log('at shail 3333');

//   // yield put(asyncSaga());
//   // console.log('at shail 4444');

//   // yield call(testGenerator$, 1000, 2000, 3000);
// }

// function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync);
// }

function* fetchUsers$() {
  yield put(setUserDataStatus(API_STATUS.PENDING));
  try {
    const apiResponse = yield call(apiCallFn, usersApi, {
      headers: {
        xyz: 'hello',
      },
    });
    // console.log(apiResponse);
    const userCardDataList = yield call(userCardDataParser, apiResponse);
    // console.log(userCardDataList);
    yield put(setUserListState(userCardDataList));
    yield put(setUserDataStatus(API_STATUS.SUCCEEDED));
  } catch (error) {
    yield put(setUserDataStatus(API_STATUS.ERROR));
  }
}

function* deleteUser$(action) {
  // console.log(action);
  const state = yield select();
  const filteredList = state.user.usersList.filter(
    (obj) => obj.id !== action.payload,
  );
  // console.log(filteredList);
  yield put(setUserListState(filteredList));
}

export default function* rootSaga() {
  yield takeLatest(fetchUsers, fetchUsers$);
  yield takeEvery(deleteUser, deleteUser$);
}
