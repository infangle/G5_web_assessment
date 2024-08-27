// store/store.ts : Contains the Redux store configuration.
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blogs/blogSlice'; // Adjust the import path

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
