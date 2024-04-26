import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducers';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
