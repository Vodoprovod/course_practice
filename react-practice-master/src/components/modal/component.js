import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';

import { closeModal } from '../../components/modal/index';

import './styles.less';

class Modal extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        modal: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['close']);
    }

    close() {
        this.props.dispatch(closeModal());
    }

    render() {
        const { isOpen, title, content } = this.props.modal;

        if (!isOpen) return null;

        return (
            <div className='modal fade in'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title'>{ title }</h4>
                            <button type='button' className='close' onClick={ this.close }>
                                <span>&times;</span>
                            </button>
                        </div>
                        { content }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}

export default connect(mapStateToProps)(Modal);
