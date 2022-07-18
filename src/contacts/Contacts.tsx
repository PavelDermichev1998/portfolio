import React, {FormEvent, useState} from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import axios from "axios";

export const Contacts = ({setLoading} : ContactsPropsType) => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<boolean>(false)


    const changeNameHandler = (e: FormEvent<HTMLInputElement>) => {
        setError(false)
        setName(e.currentTarget.value)
    }
    const changeEmailHandler = (e: FormEvent<HTMLInputElement>) => {
        setError(false)
        setEmail(e.currentTarget.value)
    }
    const changeMessageHandler = (e: FormEvent<HTMLTextAreaElement>) => {
        setError(false)
        setMessage(e.currentTarget.value)
    }

    const sendMessage = async () => {
        if (name === '' || email === '' || message === '') {
            setError(true)
        } else {
            setLoading(true)
            try {
                await axios.post('https://portfolio-smtp-nodejs.herokuapp.com/sendMessage', {name, email, message,})
            } catch (e) {
                alert('Some error')
            } finally {
                setLoading(false)
            }
        }

    }

    return (
        <div className={style.contactsBlock} id='contacts'>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <Fade cascade={true} triggerOnce duration={600} className={style.fadeForm}>
                        <input className={style.input} type="text" placeholder='Name' onChange={changeNameHandler}/>
                        <input className={style.input} type="email" placeholder='Email' onChange={changeEmailHandler}/>
                        <textarea className={style.textarea} placeholder='Message...' onChange={changeMessageHandler}>
                    </textarea>
                    </Fade>
                </form>
                <Fade triggerOnce duration={900}>
                    <button type={'submit'} className={style.button} onClick={sendMessage}>
                        Send
                    </button>
                </Fade>
                {error && <div className={style.errorMessage}>Please, fill out the form</div>}
            </div>
        </div>
    );
}

type ContactsPropsType = {
    setLoading: (loading: boolean) => void
}