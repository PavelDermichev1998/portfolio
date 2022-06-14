import React from 'react';
import style from './Nav.module.scss';
import {Fade} from "react-awesome-reveal";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Fade cascade direction={'down'} duration={600} triggerOnce>
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </Fade>
        </div>
    );
}


