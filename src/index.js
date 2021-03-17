import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";


ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <div className={style.body}>
                < App/>
            </div>

        </BrowserRouter>,
    </ErrorBoundary>,
    document.getElementById('root')
);

