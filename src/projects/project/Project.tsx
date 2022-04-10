import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
                <a className={style.button} href={''}>
                    Watch
                </a>
            </div>
            <div className={style.projectTitle}>{props.title}</div>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}