import React, {useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';
import { selectContacts } from 'redux/selectors';

import { nanoid } from 'nanoid';
import styles from "./ContactForm.module.css";

export function ContactForm() {
    const contacts = useSelector(selectContacts);
    const nameRef = useRef(null);
    const numberRef = useRef(null);    
    const dispatch = useDispatch();

  const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        } else {
            isMounted.current = true;
        }
    }, [contacts]);

    const handleAddContact = (e) => {
        e.preventDefault();
        const contactName = nameRef.current.value;
        const contactNumber = numberRef.current.value;
        if (
            contacts.find(contact => contact.name === contactName && contact.number === contactNumber
            )
        ) {
            alert(`${contactName} is already in contacts`);
            return;
        }
   
        dispatch(
            addContact({
                id: nanoid(),
                name: contactName,
                number: contactNumber,
            })
        );
        nameRef.current.value = "";
        numberRef.current.value = "";
    };

    return (
        <div className={styles.section}>
            <form onSubmit={handleAddContact}>
                <label className={styles.label}>
                    <h2>Name</h2>
                    <input
                        type="text"
                        name="name"
                        required
                        ref={nameRef}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                </label>
                <label className={styles.label}>
                    <h2>Number</h2>
                    <input
                        type="text"
                        name="number"
                        required
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        ref={numberRef}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    Add contact
                </button>
            </form>
        </div>
    );
};