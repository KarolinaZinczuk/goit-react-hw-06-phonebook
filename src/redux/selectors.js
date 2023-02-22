export const selectContacts = (state) => state.contacts;

export const selectFilters = (state) => state.filters.filters;

export const selectFilteredContacts = (state) => {
    return state.contacts.filter(contact =>
        contact.name.includes(state.filters.filters)
    );
};