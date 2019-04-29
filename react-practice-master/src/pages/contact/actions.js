export const SUBMIT_FORM = 'SUBMIT_FORM';
export const EXIT_FORM = 'EXIT_FORM';

export function submitForm(name, email) {
    return {
        type: SUBMIT_FORM,
        name, email
    };
}

export function exitForm() {
    return {
        type: EXIT_FORM
    };
}
