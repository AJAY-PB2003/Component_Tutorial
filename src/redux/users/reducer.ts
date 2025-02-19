import { createReducer } from '@reduxjs/toolkit';
import { setUserDataStatus, setUserListState, setUserState } from './action';

const initialState = { status: 'idle' };

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserState, (state, action) => {
    return { ...state, ...(action.payload || {}) };
  });
  builder.addCase(setUserListState, (state, action) => {
    return {
      ...state,
      usersList: action.payload,
    };
  });
  builder.addCase(setUserDataStatus, (state, action) => {
    if (action.payload) {
      state.status = action.payload;
    }
    // console.log(state);
    // console.log(state.status);
  });
});

export default userReducer;
