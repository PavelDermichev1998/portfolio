import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'



export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h4 className={style.title}>Pavel Dermichev</h4>
                <div className={style.linksContainer}>
                   <div className={style.link}></div>
                   <div className={style.link}></div>
                   <div className={style.link}></div>
                   <div className={style.link}></div>
                </div>
                <p> © 2022 Все права защищены</p>
            </div>
        </div>
    );
}