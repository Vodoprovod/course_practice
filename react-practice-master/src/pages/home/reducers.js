import { ADD_TODO, LIKE_TODO, DELETE_TODO, GET_TODOS } from './actions';

const initialState = {
    todos: [
        {
            id: 1,
            name: 'Todo 1'
        }
    ],
    error: '',
    isLoading: true
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const todos = state.todos;
            if (!action.error) {
                todos.push({ id: action.id, name: action.name, liked: false });
            }
            return Object.assign({}, state, {
                todos,
                error: action.error
            });
        case LIKE_TODO:
            const idx = state.todos.findIndex(todo => todo.id === action.todo.id);
            state.todos[idx].liked = action.liked;
            return Object.assign({}, state, { todos: state.todos });
        case DELETE_TODO:
            const newTodos = state.todos.filter(todo => todo.id !== action.todo.id);
            return Object.assign({}, state, { todos: newTodos });
        case GET_TODOS:
            return Object.assign({}, state, { todos: action.todos, isLoading: false });
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;
