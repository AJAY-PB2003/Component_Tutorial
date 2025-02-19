import { createAction } from '@reduxjs/toolkit';

const setUserState = createAction('@@user: SET_USER_STATE');
const setUserListState = createAction('@@user: SET_USER_LIST_STATE');
const setUserDataStatus = createAction('@@user: SET_USER_DATA_STATUS');
const fetchUsers = createAction('@@user: FETCH_USERS');
const deleteUser = createAction('@@user: DELETE_USER');

export {
  setUserState,
  setUserListState,
  setUserDataStatus,
  fetchUsers,
  deleteUser,
};
