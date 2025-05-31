import style from "./ContactList.module.css"
import {useSelector} from "react-redux"

import Contact from "../Contact/Contact";

export default function ContactList() {


    const contactsInfo = useSelector((state) => state.contacts.items);
    const contactsName = useSelector((state) => state.filters.name);
    const filterContacts = contactsInfo.filter((contact) => contact.name.toLowerCase().includes(contactsName.toLowerCase()));

    
    return (
     
    <ul className={style.list}>
        { filterContacts.map((contacts) =>
        <li className={style.item} key={contacts.id}>
                <Contact
                    userName={contacts.name}
                    phoneNumber={contacts.number}
                    contactId={contacts.id}
                />
        </li>
            )}
    </ul>
        
)

}