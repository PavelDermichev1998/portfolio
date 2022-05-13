import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <input className={style.input} type="text" placeholder='Name'/>
                    <input className={style.input} type="email" placeholder='Email'/>
                    <textarea className={style.textarea} placeholder='Message'>
                    </textarea>
                </form>
                <button type={'submit'} className={style.button}>
                    Send
                </button>
            </div>
        </div>
    );
}