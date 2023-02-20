import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts/ContactsSlice";
import filtersReducer from "../features/filters/FiltersSlice"

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
