import { useState } from 'react';

export const useForm = (initialFormValue = {}) => {
    const [ formState, setFormState ] = useState(initialFormValue);

    const onInputChanged = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const resetForm = () => {
        setFormState(initialFormValue);
    }

    return {
        ...formState,
        formState,
        resetForm,
        onInputChanged
    };
}
