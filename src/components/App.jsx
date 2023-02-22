import React, {useSelector} from 'react';

import { selectFilters } from 'redux/FiltersSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { selectContacts } from 'redux/ContactsSlice';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};