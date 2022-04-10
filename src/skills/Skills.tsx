import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'} description={'description html css sdfsdfsd sdfsdfsdf sdfsdfsdf 111111111 111111111111 111111 1111111111'}/>
                    <Skill title={'JS'} description={'description JS'}/>
                    <Skill title={'React-Redux'} description={'description React-Redux'}/>
                </div>
            </div>
        </div>
    );
}