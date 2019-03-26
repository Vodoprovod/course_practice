import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/index';
import { DevTools } from './utils/index';

import { HomePage, HomeRoutes } from './pages/home/index';
import { ContactPage, ContactRoutes } from './pages/contact/index';

export default class App extends React.Component {
    static path = '/';

    render() {
        // console.log(this.props.children);
        return (
            <div>
                <Header />
                <Switch>
                    <Route component={ HomePage } exact path={ HomePage.path } />
                    <Route component={ ContactPage } path={ ContactPage.path } />
                </Switch>
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
