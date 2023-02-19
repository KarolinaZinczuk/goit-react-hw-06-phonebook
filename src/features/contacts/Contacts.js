import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, selectContacts } from './ContactsSlice';
import { selectFilters } from '../filters/FiltersSlice';

export function Contacts() {
    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectFilters);
    const inputRef = useRef(null);

    console.log("contacts", contacts)
    
    const dispatch = useDispatch();

    // const handleAddContact = () => {
    //     const contactName = inputRef.current.value;
    //     const contactNumber = inputRef.current.value;
    //     dispatch(
    //         addContact({
    //             name: contactName,
    //             number: contactNumber,
    //         })
    //     );
    //     inputRef.current.value = "";
    // }

    return (
        <div>
            <h1> Contacts Manager </h1>

            <input type="text" name="name" ref={inputRef} />
            <input type="text" name="number" ref={inputRef} />
            <button onClick={()=>dispatch(addContact())}>ADD CONTACT</button>

            {/* <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>{contact.name} {contact.number}</li>
                ))}
            </ul> */}
        </div>
    );
}
