import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;
