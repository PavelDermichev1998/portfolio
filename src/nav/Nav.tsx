import React from 'react';
import style from './Nav.module.scss';
import {Fade} from "react-awesome-reveal";
import { Link } from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Fade cascade direction={'down'} duration={600} triggerOnce>

                <Link
                    activeClass={style.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Home</Link>
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Skills</Link>
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Projects</Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Contacts</Link>
            </Fade>
        </div>
    );
}


