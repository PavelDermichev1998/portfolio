import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from '../assets/image/my photo.jpg'

export const Main = () => {
    return (
        <div className={style.mainBlock} id='home'>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hello I`m</span>
                    <h1>Pavel Dermichev</h1>
                    <p>Front-End Developer.</p>
                </div>
                <div className={style.photoBlock}>
                    <img src={myPhoto} alt="I am"/>
                </div>
                <div className={style.description}>
                    A diligent, cooperative and resolute Front-End developer with an experience in creating SPA
                    using React, Redux, Typescript, HTML, CSS, JS seeking a position in an IT position which will
                    make possible the use of professional and technical skills developed through past work experiences
                    in this field. I'm always looking forward to improve my expertise. My free time is dedicated to
                    Codewars to improve my programming skills. My next focus is to become a Full-Stack Developer. Ready
                    to consider project work and full-time employment.
                </div>
            </div>
        </div>
    );
}


