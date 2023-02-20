import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, selectContacts } from './ContactsSlice';
import { selectFilters } from '../filters/FiltersSlice';
import { Filters } from 'features/filters/Filters';

export function Contacts() {
    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectFilters);
    const nameRef = useRef(null);
    const numberRef = useRef(null);    
    const dispatch = useDispatch();

    const handleAddContact = (e) => {
        e.preventDefault();
        const contactName = nameRef.current.value;
        const contactNumber = numberRef.current.value;
        dispatch(
            addContact({
                id: contacts.length + 1,
                name: contactName,
                number: contactNumber,
            })
        );
        nameRef.current.value = "";
        numberRef.current.value = "";
    };

    const getContact = () => {
        contacts.filters(contacts => contacts.name.includes(filters));
    };

    return (
        <div>
            <form onSubmit={handleAddContact}>
                <label>
                    <h2>Name</h2>
                    <input
                        type="text"
                        name="name"
                        ref={nameRef}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                </label>
                <label>
                    <h2>Number</h2>
                    <input
                        type="text"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        ref={numberRef}
                    />
                </label>
                <button type="submit">ADD CONTACT</button>
                <h2>Contacts</h2>
                <Filters  />
                <ul>
                    {contacts.length ? contacts.map((contact) => (
                        <li key={contact.id}>
                            {contact.name} {contact.number}
                            <button onClick={() => dispatch(deleteContact(contact.id))}>Delate</button>
                        </li>
                    )): 'No contacts'}
                </ul>
            </form>
        </div>
    );
}
