import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./ContactsSlice";
import filtersReducer from "./FiltersSlice"

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
