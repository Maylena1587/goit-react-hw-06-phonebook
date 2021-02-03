import { createAction } from '@reduxjs/toolkit';
import { v4 as uniqueId } from 'uuid';

const addContact = createAction('contact/add', (name, number) => ({
  payload: {
    id: uniqueId(),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/delete');

const changeFilter = createAction('filter/change');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
