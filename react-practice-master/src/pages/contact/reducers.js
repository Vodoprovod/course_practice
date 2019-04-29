import { SUBMIT_FORM, EXIT_FORM } from './actions';

const initialState = {
    name: '',
    email: ''
};

function contactReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_FORM:
            return Object.assign({}, state, {
                name: action.name,
                email: action.email
            });
        case EXIT_FORM:
            return Object.assign({}, state, {
                name: '',
                email: ''
            });
        default:
            return state;
    }
}

const ContactReducer = {
    user: contactReducer
};

export default ContactReducer;

