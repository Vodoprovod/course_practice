import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './list';
import ItemDetails from './item-details';

export default class ListRoutes extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route component={ ListPage } exact path={ ListPage.path } />
                    <Route component={ ItemDetails } path={ ListPage.path + '/:id' } />
                </Switch>
            </div>
        );
    }
}
