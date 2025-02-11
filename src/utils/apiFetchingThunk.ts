import { createAsyncThunk } from '@reduxjs/toolkit';

function apiFetchingThunk(actionString, apiString) {
  return createAsyncThunk(actionString, async () => {
    const response = await fetch(apiString);
    const data = await response.json();
    // console.log(data);
    return data;
  });
}

export default apiFetchingThunk;
