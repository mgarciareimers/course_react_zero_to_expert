import { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({ addCategory }) => {
    const [ value, setValue ] = useState('');

    // Update value.
    const onValueChanged = (event) => {
        setValue(event.target.value);
    }

    // Form submit has been clicked.    
    const onSubmitClicked = (event) => {
        event.preventDefault();

        if (value.trim().length <= 0) {
            return;
        }

        addCategory(value.trim());
        setValue('');
    }

    return (
        <form onSubmit={ onSubmitClicked }>
            <input 
                type='text'
                placeholder='Search gifs'
                value={ value }
                onChange={ onValueChanged }
            />
        </form>
    );
}

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired
}

export default AddCategory;