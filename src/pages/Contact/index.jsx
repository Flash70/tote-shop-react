import React from "react";
import style from './Contact.module.scss'
import {useDispatch} from "react-redux";
import {setContactItem} from "../../redux/contactReducer";
import {ContactForm} from "./Form";


export const Contact = () => {
    const dispatch = useDispatch();

    const addContact = (value) => {
        dispatch(setContactItem(value))
    }

    return (
        <div className={style.block}>
            <div>
                <h1>Contact</h1>
            </div>
            <div>
                <h3>You're welcome to contact us with any inquiry</h3>
                <p> Tel: 123-456-7890 | info@my-domain.com</p>
            </div>
            <ContactForm onSubmit={addContact}/>
        </div>
    )
}
