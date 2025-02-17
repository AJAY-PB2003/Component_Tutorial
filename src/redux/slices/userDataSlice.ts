import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCallFn } from '../../utils/apiCallFn';
import API_STATUS from '../../const/apiStatus';
import { usersApi } from '../../const/apiUrl';
import { userCardDataParser } from '../../utils/parser/userCardDataParser';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // api call
  // console.log('api fetching');
  const apiResponse = await apiCallFn(usersApi, {
    headers: {
      xyz: 'hello',
    },
  });

  // parser
  const userCardDataList = userCardDataParser(apiResponse);

  // return data
  // console.log(apiResponse);
  return userCardDataList;
});

const initialState = {
  usersList: [],
  status: 'idle',
};

export const userDataSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = API_STATUS.PENDING;
        // console.log('Pending State');
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = API_STATUS.SUCCEEDED;
        state.usersList = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = API_STATUS.ERROR;
      });
  },
});

export const { filterListSetter, statusUpdater, recipesListSetter } =
  userDataSlice.actions;

export default userDataSlice.reducer;
