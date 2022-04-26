import React from "react";
import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todolistImage from "../assets/image/todolistt_700x455.jpg"
import socialNetworkImage from "../assets/image/social-network-background-with-icons_23-2147497535.jpg"

export const Projects = () => {
    const socialNetworkImg = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todolistImg = {
        backgroundImage: `url(${todolistImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'My projects'}/>
                <div className={style.projects}>
                    <Project style={todolistImg}
                             title={'Todo list'}
                             description={'A project description is a high-level overview of why you are doing a project.'}/>
                    <Project style={socialNetworkImg}
                             title={'Social network'}
                             description={' The document explains a project is objectives and its essential qualities.'}/>
                </div>
            </div>
        </div>
    );
}