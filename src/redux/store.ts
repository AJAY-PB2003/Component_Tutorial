import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slices/counterslice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './RootSaga';
import RootReducer from './RootReducer';

const sagaMiddleware = createSagaMiddleware();
const createEnhancers = (getDefaultEnhancers: GetDefaultEnhancers<any>) => {
  if (__DEV__) {
    const reactotron = require("../../ReactotronConfig").default
    return getDefaultEnhancers().concat(reactotron.createEnhancer())
  } else {
    return getDefaultEnhancers()
  }
}

export const store = configureStore({
  reducer: RootReducer,
  enhancers:createEnhancers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);



