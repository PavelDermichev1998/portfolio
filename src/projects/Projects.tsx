import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={'Todo list'} description={'A project description is a high-level overview of why you\'re doing a project.'}/>
                    <Project title={'Social network'} description={' The document explains a project\'s objectives and its essential qualities.'}/>
                </div>
            </div>
        </div>
    );
}