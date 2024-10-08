import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [ formState, setFormState ] = useState(initialForm);
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ]);

    useEffect(() => {
        setFormState(initialForm);
    }, [ initialForm ]);
    

    const isFormValid = useMemo(() => {
        for (const key of Object.keys(formValidation)) {
            if (formValidation[key] !== null) {
                return false;
            }
        }

        return true;
    }, [ formValidation ]);
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {
        const formCheckedValues = {};

        for (const key of Object.keys(formValidations)) {
            const [ fn, errorMessage ] = formValidations[key];

            formCheckedValues[`${ key }ValidText`] = fn(formState[key]) ? null : errorMessage;
            
            setFormValidation(formCheckedValues);
        }
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}