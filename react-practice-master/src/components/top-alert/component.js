import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, bindAll } from 'lodash';
import { connect } from 'react-redux';

import { exitForm } from '../../pages/contact/actions';

import './styles.less';

class TopAlert extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['removeMargin', 'addMargin', 'unauth']);
    }

    removeMargin() {
        document.querySelector('#app').classList.remove('m-t-50');
    }

    addMargin() {
        document.querySelector('#app').classList.add('m-t-50');
    }

    unauth(event) {
        event.preventDefault();
        this.removeMargin();
        this.props.dispatch(exitForm());
    }

    render() {
        const { name, email } = this.props.user;
        if (isEmpty(name) || isEmpty(email)) {
            this.removeMargin();
            return null;
        }

        this.addMargin();

        return (
            <div className='alert alert-success b-alert'>
                <div>
                    <button className='btn btn-default' onClick={ this.unauth }>Выход</button>
                </div>
                <div className='auth-inf'>
                    <div className='name'>{ name }</div>
                    <div className='email'>{ email }</div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(TopAlert);
