import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-modal';
import { addHours, differenceInSeconds } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useMemo } from 'react';
import { useCalendarStore, useUiStore } from '../../hooks';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const CalendarModal = () => {
    const { isDateModalOpen, closeDateModal } = useUiStore();
    const { activeEvent, saveEvent } = useCalendarStore();

    const [ formSubmitted, setFormSubmitted ] = useState(false);

    const [ formValues, setFormValues ] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 1),
    });

    const titleClass = useMemo(() => {
        if (!formSubmitted) {
            return '';
        }

        return formValues.title.length > 0 ? '' : 'is-invalid';
    }, [ formValues.title, formSubmitted ]);

    useEffect(() => {
        if (activeEvent !== undefined && activeEvent !== null) {
            setFormValues({ ...activeEvent });
        }
    }, [ activeEvent ]);
    

    // Onclick methods.
    const onCloseModal = () => {
        closeDateModal();
        setFormSubmitted(false);
    }

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        })
    }

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [ changing ]: event
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if (formSubmitted) {
            return;
        }

        setFormSubmitted(true);

        const difference = differenceInSeconds(formValues.end, formValues.start);
        
        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Dates not valid', 'Review your dates.');
        } else if (formValues.title.length <= 0) {
            return;
        }

        await saveEvent(formValues);
        closeDateModal();
        setFormSubmitted(false);
    }

    return (
        <Modal
            isOpen={ isDateModalOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
            className='modal'
            closeTimeoutMS={ 200 }
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className='container' onSubmit={ onSubmit }>
                <div className='form-group mb-2'>
                    <label>Fecha y hora inicio</label>
                    <DatePicker 
                        className='form-control'
                        wrapperClassName='w-100'
                        dateFormat='Pp'
                        showTimeSelect={ true }
                        selected={ formValues.start }
                        onChange={ (event) => onDateChanged(event, 'start') }
                    />
                </div>

                <div className='form-group mb-2'>
                    <label>Fecha y hora fin</label>
                    <DatePicker 
                        minDate={ formValues.start }
                        className='form-control'
                        wrapperClassName='w-100'
                        dateFormat='Pp'
                        showTimeSelect={ true }
                        selected={ formValues.end }
                        onChange={ (event) => onDateChanged(event, 'end') }
                    />
                </div>

                <hr />
                <div className='form-group mb-2'>
                    <label>Titulo y notas</label>
                    <input 
                        type='text' 
                        className={ `form-control ${ titleClass }` }
                        placeholder='Título del evento'
                        name='title'
                        autoComplete='off'
                        value={ formValues.title }
                        onChange={ onInputChanged }
                    />
                    <small id='emailHelp' className='form-text text-muted'>Una descripción corta</small>
                </div>

                <div className='form-group mb-2'>
                    <textarea 
                        type='text' 
                        className='form-control'
                        placeholder='Notas'
                        rows='5'
                        name='notes'
                        value={ formValues.notes }
                        onChange={ onInputChanged }
                    ></textarea>
                    <small id='emailHelp' className='form-text text-muted'>Información adicional</small>
                </div>

                <button
                    type='submit'
                    className='btn btn-outline-primary btn-block'
                >
                    <i className='far fa-save'></i>
                    <span> Guardar</span>
                </button>
            </form>
        </Modal>
    );
}

export default CalendarModal;