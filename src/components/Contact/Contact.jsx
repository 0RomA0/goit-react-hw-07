import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import style from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ userName, phoneNumber, contactId }) {
    
    const dispatch = useDispatch();
    

    return (
        <>
            <div className={style.containerText}>
                <p className={ style.text}> <IoMdPerson /> {userName} </p>
                <p className={style.text}> <FaPhoneAlt /> {phoneNumber} </p>
            </div>
        <button className={ style.btn } onClick={() => dispatch(deleteContact(contactId))}> Delete </button>
    </>
        
    )        
}