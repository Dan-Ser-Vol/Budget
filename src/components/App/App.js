import {GlobalStyle, Wrapper} from "./style";
import {
    Route,
} from "react-router-dom";
import Statistics from "../Statistics/Statistic";
import About from "../About/About";
import Home from "../Home/Home";
import Navbar from "../NavBar/Navbar";
import React from "react";
import {open} from '../../utils/indexdb'


class App extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            loading: true
        }
    }
componentDidMount() {
    open().then(()=>{
        this.setState({
            loading: false
        })
    }).catch(()=>{
        console.error('Помилка!')
    })
}

    render() {
if(this.state.loading){
    return <div>Loading...</div>
}
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
}

export default App