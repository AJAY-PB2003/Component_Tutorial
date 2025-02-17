import { createAction } from '@reduxjs/toolkit';

//Counter Actions
const increment = createAction('counter/increment');
const decrement = createAction('counter/decrement');

export { increment, decrement };

//Recipe Actions
