import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactsReducer } from './contactsReducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer
// });

export const store = createStore(
  contactsReducer,
  composeWithDevTools(applyMiddleware())
);

export type RootState = ReturnType<typeof store.getState>
