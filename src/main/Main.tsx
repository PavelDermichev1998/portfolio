import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from '../assets/image/my photo.jpg'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hello I`m</span>
                    <h1>Pavel Dermichev</h1>
                    <p>Front-End Developer.</p>
                </div>
                <div className={style.photoBlock}>
                    <img src={myPhoto} alt="My photo"/>
                </div>
            </div>
        </div>
    );
}


