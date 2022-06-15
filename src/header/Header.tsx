import React from 'react';
import style from './Header.module.scss';
import {Nav} from "../nav/Nav";
import reactImg from "../assets/image/react-446.svg";

export const Header = () => {
    return (
        <div className={style.header}>
            <img src={reactImg} alt="react" className={style.nav_img}/>
            <Nav/>
        </div>
    );
}


