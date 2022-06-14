import React from 'react';
import style from './Nav.module.scss';
import {FadeReveal} from "../App";


export const Nav = () => {
    return (
        <FadeReveal top cascade>
            <div className={style.nav}>
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </div>
        </FadeReveal>
    );
}


