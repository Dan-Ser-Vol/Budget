import {GlobalStyle, Wrapper} from "./style";
import {
    Route,
} from "react-router-dom";
import Statistics from "../Statistics/Statistic";
import About from "../About/About";
import Home from "../Home/Home";
import Navbar from "../NavBar/Navbar";
import React from "react";


const App = () => {

    return (

        <Wrapper>
            <GlobalStyle/>
            <Navbar/>

            <div>
                <Route path='/' render={() => <Home/>}/>
                <Route path='/statistics' render={() => <Statistics/>}/>
                <Route path='/about' render={() => <About/>}/>
            </div>

        </Wrapper>

    )
}

export default App