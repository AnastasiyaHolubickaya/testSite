import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {changeStyleElement} from './redux/state'
import {BrowserRouter} from "react-router-dom";


 export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} changeStyleElement={changeStyleElement} />
        </BrowserRouter>, document.getElementById('root'));
};
