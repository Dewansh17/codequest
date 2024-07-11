// store.js
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducers/usersReducer'; // Ensure this path is correct and the reducer exists

// Combine all reducers
const rootReducer = combineReducers({
  users: usersReducer, // Add your reducers here
  // other reducers can be added here
});

// Create the Redux store with DevTools extension
const store = createStore(rootReducer, composeWithDevTools());

export default store;
