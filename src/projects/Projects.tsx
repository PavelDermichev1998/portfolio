import React from "react";
import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todolistImage from "../assets/image/todolistt_700x455.png"
import socialNetworkImage from "../assets/image/social-network-background-with-icons_23-2147497535.jpg"
import cardsTrainingImg from "../assets/image/cards-training.jpg"
import gitInformationImg from "../assets/image/git-information-project.jpg"
import {Fade} from "react-awesome-reveal";


export const Projects = () => {
    const socialNetworkImgStyle = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todolistImgStyle = {
        backgroundImage: `url(${todolistImage})`,
    };
    const cardsTrainingImgStyle = {
        backgroundImage: `url(${cardsTrainingImg})`,
    };
    const gitInformationImgStyle = {
        backgroundImage: `url(${gitInformationImg})`,
    };


    return (
        <div className={style.projectsBlock} id='projects'>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'My projects'}/>
                <div className={style.projects}>
                    <Fade triggerOnce cascade={true} duration={600}>

                        <Project style={cardsTrainingImgStyle}
                                 title={'Cards training (2022)'}
                                 linkProject={'https://github.com/mishashmidt0/Card-training/tree/dev'}
                                 description={'SPA for learning by cards. Implemented: login page with validation; ' +
                                 'register page with validation; reset password page with validation; 404 page; profile ' +
                                 'page with abilities to: edit your profile information (change avatar and nickname), add ' +
                                 'a new card pack and edit, search, sort, view, remove and learn your card packs; packs list ' +
                                 'page with abilities to: search, sort, view and learn any card packs; learn page with abilities ' +
                                 'to answer a question and evaluate your answer.'}
                                 technologies={'JavaScript, TypeScript, React, Redux, Redux-thunk, ' +
                                 'React-router-dom v6, Axios, Formik, CSS, Material UI, ESLint, Prettier'}
                        />

                        <Project style={gitInformationImgStyle}
                                 title={'Git information (2022)'}
                                 linkProject={'https://github.com/PavelDermichev1998/github-project'}
                                 description={'SPA for viewing information about a user\'s GitHub account. Implemented: ' +
                                 'page with abilities to: search user for user name, watch profile information (repositories, ' +
                                 'total count repositories), redirect to GitHub user page by clicking on the user name'}
                                 technologies={'JavaScript, TypeScript, React, Redux, Redux-thunk, ' +
                                 'React-paginate, Axios, CSS'}
                        />

                        <Project style={todolistImgStyle}
                                 title={'Todo list (2021-2022)'}
                                 linkProject={'https://github.com/PavelDermichev1998/todolist-ts-47-main'}
                                 description={'SPA for managing to-do lists and their items. Implemented: add todolist / ' +
                                 'task, remove todolist / task, rename todolist / task, marking the completed task, displaying all ' +
                                 '/ active / confirmed tasks in todolist.'}
                                 technologies={'JavaScript, TypeScript, React, Redux, Redux-thunk, React-router-dom v6, ' +
                                 'Axios, Formik, Material UI, CSS'}
                        />

                        <Project style={socialNetworkImgStyle}
                                 title={'Social network (2021-2022)'}
                                 linkProject={'https://github.com/PavelDermichev1998/social-network-ts-47'}
                                 description={'SPA for social actions - messaging and blogging. Implemented: login page with ' +
                                 'validation, error displaying and captcha; 404 page; profile page with abilities to: view the ' +
                                 'information of the selected user, edit your profile information, change avatar, add a new post ' +
                                 'and view your published posts; dialogs page with the ability to send a message; users page and ' +
                                 'friends page with abilities to: view the list of users using pagination, subscribe and unsubscribe ' +
                                 'to any user, view any user profile.'}
                                 technologies={'JavaScript, TypeScript, React, Redux, Redux-thunk, React-router-dom, ' +
                                     'Axios, Formik, CSS'}
                        />

                    </Fade>
                </div>

            </div>
        </div>
    );
}