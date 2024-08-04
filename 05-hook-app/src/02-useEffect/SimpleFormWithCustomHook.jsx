import { useForm } from '../hooks/useForm';

const SimpleFormWithCustomHook = () => {
    const { username, email, password, resetForm, onInputChanged } = useForm({
        username: 'usuario1',
        email: 'usuario1@email.com',
        password: ''
    });

    const onResetFormClicked = () => {
        resetForm();
    }

    return (
        <>
            <h1>Simple Form With Custom Hook</h1>
            <hr />

            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputChanged }
            />

            <input
                type='email'
                className='form-control mt-2'
                placeholder='johndoe@email.com'
                name='email'
                value={ email }
                onChange={ onInputChanged }
            />

            <input
                type='password'
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                value={ password }
                onChange={ onInputChanged }
            />

            <button 
                className='btn btn-primary mt-2' 
                onClick={ onResetFormClicked }
            >Reset
            </button>
        </>
    );
}

export default SimpleFormWithCustomHook;