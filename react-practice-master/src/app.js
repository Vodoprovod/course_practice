import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/index';
import { DevTools } from './utils/index';

import { HomePage } from './pages/home/index';
import { ContactPage } from './pages/contact/index';
import { ListPage, ListRoutes } from './pages/list/index';
import { Modal } from './components/modal/index';
import { TopAlert } from './components/top-alert/index';
import ErrorPage from './pages/error/index';

export default class App extends React.Component {
    static path = '/';

    render() {
        return (
            <div className='container-fluid'>
                <TopAlert />
                <Modal />
                <Header />
                <Switch>
                    <Route component={ HomePage } exact path={ HomePage.path } />
                    <Route component={ ContactPage } path={ ContactPage.path } />
                    <Route component={ ListRoutes } path={ ListPage.path } />
                    <Route component={ ErrorPage } path='*' />
                </Switch>
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
