import React from 'react';
import { bindAll } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { addTodo, likeTodo, deleteTodo, getTodos } from './actions';
import Input from '../../components/ui/input/index';
import Loader from '../../components/ui/loader/index';
import { LS } from '../../utils/index';
import './styles.less';

class HomePage extends React.Component {
    static path = '/';

    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        bindAll( this, [ 'renderTodos', 'inputOnChange', 'addTodo' ] );

        this.props.dispatch(getTodos());
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        this.props.dispatch(addTodo(this.props.home.todos, this.state.todoName));

        this.setState({ todoName: '' });
    }

    renderTodos(item, idx) {
        const todoClasses = classnames(
            'b-home-todo', {
                'is-liked': item.liked
            });

        const btnClasses = classnames('btn btn-light', {
            'active': item.liked
        });

        return (
            <li key={ idx }>
                <span className={ todoClasses }>{ item.name }</span>
                <button className='btn btn-light'><i onClick={ this.deleteTodo.bind(this, item) } className='fa fa-remove ' /></button>
                <button className={ btnClasses } onClick={ this.likeTodo.bind(this, item) }><i className='fa fa-heart ' /></button>
            </li>
        );
    }

    likeTodo(todo) {
        this.props.dispatch(likeTodo(todo));
    }

    deleteTodo(todo) {
        this.props.dispatch(deleteTodo(todo));
    }

    render() {
        const { todoName } = this.state;
        const { todos, error, isLoading } = this.props.home;

        LS.set('todos', todos);
        return (

            <div className='row-fluid b-home'>
                <div className='col-12'>
                    <ul>
                        { isLoading
                            ? <Loader />
                            : todos.length !== 0
                                ? todos.map(this.renderTodos)
                                : 'Элементов нет'
                        }
                    </ul>
                    <div className='col-4'>
                        <Input
                            onChange={ this.inputOnChange }
                            value={ todoName }
                            error={ error }
                        />
                        <button className='btn btn-primary b-home-submit ' onClick={ this.addTodo } >Add todo</button>
                    </div>
                </div>
            </div>

        );
    }

    componentWillUnmount() {
    }
}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
