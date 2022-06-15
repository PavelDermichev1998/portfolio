import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from '../assets/image/my photo.jpg'
import {Background} from "../BackgroundAnimated/Background";
import ReactTypingEffect from 'react-typing-effect';
import {Fade} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    return (
        <div className={style.mainBlock} id='home'>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Fade cascade={true} duration={700} triggerOnce style={{zIndex: 2}}>
                    <div className={style.text}>
                        <span>Hello I`m</span>
                        <h1>Pavel Dermichev</h1>
                        <ReactTypingEffect
                            text={["Front-End Developer."]}
                            typingDelay={1000}
                            speed={200}
                            eraseSpeed={200}
                        />
                    </div>
                    <Tilt>
                        <div className={style.photoBlock}>
                            <img src={myPhoto} alt="I am"/>
                        </div>
                    </Tilt>
                    <div className={style.description}>
                        A diligent, cooperative and resolute Front-End developer with an experience in creating SPA
                        using React, Redux, Typescript, HTML, CSS, JS seeking a position in an IT position which will make
                        possible the use of professional and technical skills developed through past work experiences in this
                        field. I'm always looking forward to improve my expertise. My free time is dedicated to Codewars to
                        improve my programming skills. In addition, I prefer boosting my English expanding my vocabulary by
                        reading texts that are relevant to my work. My next focus is to become a Full-Stack Developer that’s
                        why I also intend to learn Node.js. Ready to consider project work and full-time employment.
                    </div>
                </Fade>
            </div>
            <Background/>
        </div>
    );
}


