import { createAction } from '@reduxjs/toolkit';

//Counter Actions
const increment = createAction('counter/increment');
const decrement = createAction('counter/decrement');
const asyncIncrement= createAction('INCREMENT_ASYNC');

export { increment, decrement ,asyncIncrement};

//Recipe Actions
