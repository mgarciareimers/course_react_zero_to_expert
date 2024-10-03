import React from 'react';
import { useCalendarStore } from '../../hooks';

const FabDelete = () => {
    const { deleteActiveEvent } = useCalendarStore();

    const onClicked = () => {
        deleteActiveEvent();
    }

    return (
        <button
            className='btn btn-danger fab-delete'
            onClick={ onClicked }
        >
            <i className='fas fa-trash-alt'></i>
        </button>
    );
}

export default FabDelete
