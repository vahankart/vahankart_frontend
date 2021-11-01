import { configureStore } from '@reduxjs/toolkit';
import favReducer from './favSlice'


export const store = configureStore({
  reducer: {
    favorite: favReducer,
  },
});
