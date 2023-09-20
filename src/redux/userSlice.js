// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state and reducers
export const userSlice = createSlice({
  name: 'user', // The name of the slice, used for debugging and action type generation
  initialState: {
    username: null, // Initial state for the 'username' field
    isLoggedIn: false, // Initial state for the 'isLoggedIn' field
  },
  reducers: {
    // Reducer for login action
    loginUser: (state, action) => {
      state.username = action.payload.username; // Update the 'username' field in the state
      state.isLoggedIn = true; // Set 'isLoggedIn' to true
    },
    // Reducer for logout action
    logoutUser: (state) => {
      state.username = null; // Reset the 'username' field
      state.isLoggedIn = false; // Set 'isLoggedIn' to false
    },
  },
});

// Export the generated action creators
export const { loginUser, logoutUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
