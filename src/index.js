import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './context/context'; //(3), thus we want to wrap our APp with the provider
import App from './App'; //main component
import './index.css';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'));//app go inside our document.getEl, which we will target root, a div in our html, 

    //so we wrapped our application inside our provider
    //first step, we store the info (value) at that context, so how to retrieve that inside all our component, so lets go to the List.jsx a very nested component, just impor t(3)