import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {FadeReveal} from "../App";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock} id='contacts'>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <FadeReveal left cascade>
                <form className={style.form}>
                    <input className={style.input} type="text" placeholder='Name'/>
                    <input className={style.input} type="email" placeholder='Email'/>
                    <textarea className={style.textarea} placeholder='Message'>
                    </textarea>
                </form>
                </FadeReveal>
                <FadeReveal left>
                <button type={'submit'} className={style.button}>
                    Send
                </button>
                </FadeReveal>
            </div>
        </div>
    );
}