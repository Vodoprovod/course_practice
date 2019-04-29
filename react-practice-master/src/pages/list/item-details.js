import React from 'react';
import PropTypes from 'prop-types';
import { bindAll } from 'lodash';

import { store } from '../../index';

export default class ItemDetails extends React.Component {
    static propTypes = {
        match: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['getCurrentItemFromStore']);

        const item = this.getCurrentItemFromStore();

        this.state = {
            id: item.id,
            name: item.name,
            youtube: item.youtube
        };

    }

    getCurrentItemFromStore() {
        const actualStore = store.getState();
        const { items } = actualStore.list;

        const idx = items.findIndex(item => item.id === Number(this.props.match.params.id));

        return {
            id: items[idx].id,
            name: items[idx].name,
            youtube: items[idx].youtube
        };
    }

    render() {
        return (
            <div className='row b-list-details'>
                <div className='col-xs-12'>
                    <div className='card card-primary'>
                        <div className='card-header'>
                            <b>{ this.state.id }</b> { this.state.name }
                        </div>
                        <div className='card-body'>
                            <iframe src= {`https://www.youtube.com/embed/${ this.state.youtube }`} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
