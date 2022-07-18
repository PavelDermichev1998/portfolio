import React, {useState} from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {GlobalLoadingComponent} from "./GlobalLoading/GlobalLoadingComponent";

const App = () => {

    const [loading, setLoading] = useState<boolean>(false)


    if(loading) return <div>
      <div className="loadingText">Thank you for the sent message. </div>
        <GlobalLoadingComponent/>
    </div>

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts setLoading={setLoading}/>
            <Footer/>
        </div>
    );
}

export default App;
