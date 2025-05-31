import { Formik, Form, Field,  ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import style from "./ContactForm.module.css"

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {

    const dispatch = useDispatch();


    const FeedbackMessage = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid format (e.g. 123-45-67)").required("Phone number is required")

    });


    const initialValues = {
        username: "",
        number: ""
    };
   
    const nameFieldId = useId();
    const numberlFieldId = useId();
    

    const handleSubmit = (values, actions) => {
        dispatch(addContact({ id: nanoid(), name: values.username, number: values.number }));
            actions.resetForm();
        };

return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackMessage}>
    
        <Form className={style.form}>
		
            <div className={style.divContainer}>

            <label htmlFor={nameFieldId}> Name </label>
            <Field className={style.input} type="text" name="username" />
            <ErrorMessage className={style.errorMessage} name="username" component="span" />

            </div>
            

            <div className={style.divContainer}>

            <label htmlFor={numberlFieldId}> Number </label>
            <Field className={style.input} type="text" name="number" />
            <ErrorMessage className={style.errorMessage} name="number" component="span" />
                
            </div>

            <button className={style.btn} type="submit"> Add contact </button>
        </Form>
        
    </Formik>


)   
}


