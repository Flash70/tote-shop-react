import React from 'react';
import style from '../../pages/Contact/Contact.module.scss';
import {Field, reduxForm} from 'redux-form';
import {
    alphaNumeric,
    aol,
    email, FormControlInput, FormControlTextarea, maxLength100,
    maxLength15,
    minLength2,
    phoneNumber,
    required,
} from '../../validation';


const Form = ({addContact, handleSubmit}) => {


    return (<div className={style.blockInput}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <Field type="text" placeholder={'Enter Your First Name'} name={'firstName'}
                           validate={[required, maxLength15, minLength2]} warn={alphaNumeric}
                           component={FormControlInput}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <Field type="text" placeholder='Enter Your Last Name' name='lastName'
                           validate={[required, maxLength15, minLength2]} warn={alphaNumeric}
                           component={FormControlInput}/>
                </div>
                <div>
                    <label>Email</label>
                    <Field type="email" placeholder='Enter Your Email' name='email' validate={[required, email]}
                           warn={aol}
                           component={FormControlInput}/>
                </div>
                <div>
                    <label>Phone</label>
                    <Field type="number" placeholder='Enter Your Phone' name='phone' component={FormControlInput}
                           validate={[required, phoneNumber]}/>
                </div>
                <div>
                    <label>Message</label>
                    <Field type="text" placeholder='Type your message here...' name='message'
                           validate={[required, maxLength100]} warn={alphaNumeric}
                           component={FormControlTextarea}/>
                </div>

                <button className={style.button} onClick={addContact}>Submit</button>
            </form>
        </div>
    )
}

export const ContactForm = reduxForm({form: 'contact'})(Form)


