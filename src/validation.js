import style from "./pages/Contact/Contact.module.scss";
import React from "react";

export const required = value => value ? undefined : 'Field is required!';


export const alphaNumeric = value => value && /[^a-zA-Zа-яА-Я0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined;

const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength15 = maxLength(15);
export const maxLength100 = maxLength(100);

const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const phoneNumber = value => value && !/^(0|[1-9][0-9]{10})$/i.test(value)
        ? 'Invalid phone number, must be 11 digits'
        : undefined;

export const aol = value => value && /.+@aol\.com/.test(value)
        ? 'Really? You still use AOL for your email?'
        : undefined;


export const FormControlInput = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.form__control + " " + (hasError ? style.error: "")}>
            <input {...input} {...props}/>
            {meta.touched &&
            ((meta.error && <span className={style.form__control}>{meta.error}</span>) ||
                (meta.warning && <span className={style.form__control}>{meta.warning}</span>))}
        </div>
    )
}

export const FormControlTextarea = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.form__control + " " + (hasError ? style.error: "")}>
            <textarea {...input} {...props}/>
            {meta.touched &&
            ((meta.error && <span className={style.form__control}>{meta.error}</span>) ||
                (meta.warning && <span className={style.form__control}>{meta.warning}</span>))}
        </div>
    )
}