import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock} id='contacts'>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <Fade cascade={true} triggerOnce duration={600} className={style.fadeForm}>
                        <input className={style.input} type="text" placeholder='Name'/>
                        <input className={style.input} type="email" placeholder='Email'/>
                        <textarea className={style.textarea} placeholder='Message'>
                    </textarea>
                    </Fade>
                </form>
                <Fade triggerOnce duration={900}>
                <button type={'submit'} className={style.button}>
                    Send
                </button>
                </Fade>
            </div>
        </div>
    );
}