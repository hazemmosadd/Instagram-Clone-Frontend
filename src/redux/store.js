import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import the user reducer

// Create the Redux store
export const store = configureStore({
  reducer: {
    user: userReducer, // Use the user reducer for the 'user' slice of the state
  },
});