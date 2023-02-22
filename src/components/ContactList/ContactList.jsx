import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectContacts } from 'redux/ContactsSlice';
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { selectFilters } from 'redux/FiltersSlice';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filters.toLowerCase());
  });

    return (
        <>
            {filteredContacts.length > 0 ? (
                <ul className={styles.list}>
                    {contacts.length ? contacts.map((contact) => (
                        <li className={styles.item} key={contact.id}>
                            {contact.name} {contact.number}
                            <button
                                className={styles.button}
                                onClick={() => dispatch(deleteContact(contact.id))}>
                                Delete
                            </button>
                        </li>
                    ))
                        : 'No contacts'}
                </ul>
            ) : "You don't have this contact"}
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func,
};