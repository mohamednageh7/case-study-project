import { configureStore } from '@reduxjs/toolkit';
import rootreducers from './reducers';

export const store = configureStore({
  reducer: rootreducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});

export default store;
