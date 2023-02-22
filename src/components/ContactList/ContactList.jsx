import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'redux/selectors.js';
import { deleteContact } from 'redux/ContactsSlice';

import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    return (
        <ul className={styles.list}>
            {contacts.length ? filteredContacts.map((contact) => (
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