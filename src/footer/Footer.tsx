import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import telegramImg from '../assets/image/telegram.svg'
import gitHubImg from '../assets/image/github.svg'
import linkedInImg from '../assets/image/linkedin-round.svg'
import instagramImg from '../assets/image/instragram-round-icon-png-free-download.svg'
import {FadeReveal} from "../App";


export const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <FadeReveal top>
                    <h4 className={style.title}>Pavel Dermichev</h4>
                </FadeReveal>
                <div className={style.linksContainer}>
                    <FadeReveal>
                        <div className={style.link}>
                            <a href='https://t.me/pavelDermichev'>
                                <img src={telegramImg} alt=""/>
                            </a>
                        </div>
                        <div className={style.link}>
                            <a href='https://github.com/PavelDermichev1998'>
                                <img src={gitHubImg} alt=""/>
                            </a>
                        </div>
                        <div className={style.link}>
                            <a href='https://www.linkedin.com/in/pavel-dermichev-2032a5208/'>
                                <img src={linkedInImg} alt=""/>
                            </a>
                        </div>
                        <div className={style.link}>
                            <a href='https://www.instagram.com/paveldskr/'>
                                <img src={instagramImg} alt=""/>
                            </a>
                        </div>
                    </FadeReveal>
                </div>
                <FadeReveal bottom>
                    <p> © 2022 All Rights Reserved</p>
                </FadeReveal>
            </div>
        </div>
    );
}