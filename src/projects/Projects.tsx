import React from "react";
import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todolistImage from "../assets/image/todolistt_700x455.jpg"
import socialNetworkImage from "../assets/image/social-network-background-with-icons_23-2147497535.jpg"
import {Fade} from "react-awesome-reveal";


export const Projects = () => {
    const socialNetworkImg = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todolistImg = {
        backgroundImage: `url(${todolistImage})`,
    };

    return (
        <div className={style.projectsBlock} id='projects'>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'My projects'}/>
                <div className={style.projects}>
                    <Fade triggerOnce cascade={true} duration={600}>
                        <Project style={todolistImg}
                                 title={'Todo list'}
                                 linkProject={'https://github.com/PavelDermichev1998/todolist-ts-47-main'}
                                 description={'A project description is a high-level overview of why you are doing a project.'}/>
                        <Project style={socialNetworkImg}
                                 title={'Social network'}
                                 linkProject={'https://github.com/PavelDermichev1998/social-network-ts-47'}
                                 description={' The document explains a project is objectives and its essential qualities.'}/>
                    </Fade>
                </div>

            </div>
        </div>
    );
}