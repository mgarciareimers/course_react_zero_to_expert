import React from 'react';
import { useCalendarStore, useUiStore } from '../../hooks';

const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { resetActiveEvent } = useCalendarStore();

    const onOpenModalButtonClicked = () => {
        resetActiveEvent();
        openDateModal();
    }

    return (
        <button
            className='btn btn-primary fab'
            onClick={ onOpenModalButtonClicked }
        >
            <i className='fas fa-plus'></i>
        </button>
    );
}

export default FabAddNew
