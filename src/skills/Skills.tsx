import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reduxImg from '../assets/image/redux.svg'
import axiosImg from '../assets/image/axios.svg'
import muiImg from '../assets/image/material-ui-1.svg'
import formikImg from '../assets/image/formik.png'
import gitImg from '../assets/image/git.png'
import htmlImg from '../assets/image/html-1.svg'
import cssImg from '../assets/image/css.svg'
import sassImg from '../assets/image/sass.png'
import javascriptImg from '../assets/image/js.png'
import typescriptImg from '../assets/image/typescript-2.svg'
import reactImg from '../assets/image/react-446.svg'
import storybookImg from '../assets/image/storybook.jpg'
import { Fade } from "react-awesome-reveal";


export const Skills = () => {
    return (
        <div className={style.skillsBlock} id ='skills'>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'My skills'}/>
                    <div className={style.skills}>
                        <Fade triggerOnce cascade={true} duration={500} direction={'down'}>
                        <Skill
                            image={htmlImg}
                            title={'HTML'}
                            description={''}/>
                        <Skill
                            image={cssImg}
                            title={'CSS'}
                            description={''}/>
                        <Skill
                            image={sassImg}
                            title={'SASS'}
                            description={''}/>
                        <Skill
                            image={javascriptImg}
                            title={'JavaScript'}
                            description={''}/>
                        <Skill
                            image={typescriptImg}
                            title={'TypeScript'}
                            description={''}/>
                        <Skill
                            image={reactImg}
                            title={'React'}
                            description={''}/>
                        <Skill
                            image={reduxImg}
                            title={'Redux'}
                            description={''}/>
                        <Skill
                            image={axiosImg}
                            title={'Axios/REST API'}
                            description={''}/>
                        <Skill
                            image={storybookImg}
                            title={'Storybook'}
                            description={''}/>
                        <Skill
                            image={muiImg}
                            title={'Material-UI'}
                            description={''}/>
                        <Skill
                            image={formikImg}
                            title={'Formik'}
                            description={''}/>
                        <Skill
                            image={gitImg}
                            title={'Git'}
                            description={''}/>
                        </Fade>
                    </div>
            </div>
        </div>
    );
}