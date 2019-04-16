import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import routes from './routes';

// import 'fontawesome/css/font-awesome.min.css';


const store = configureStore();


ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter>
            { routes }
        </BrowserRouter>
    </Provider>
), document.querySelector('#app'));
