import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import messagesReducer from './messagesReducer';

const store = configureStore({
  reducer: messagesReducer,
  middleware: [thunkMiddleware],
});

export default store;
