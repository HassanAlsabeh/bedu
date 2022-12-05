import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducer from '../app/features/counter/counterSlice';
import authreducer from '../app/features/counter/authSlice';

import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const persistConfig = {
  key: 'counter',
  version: 1,
  storage: AsyncStorage,
};
const persistConfigAuth = {
  key: 'auth',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, counterReducer);
const persistedReducerAuth = persistReducer(persistConfigAuth, authreducer);

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
    auth: persistedReducerAuth,
    middleware: [thunk, logger],
  },
});
export const persistor = persistStore(store);
