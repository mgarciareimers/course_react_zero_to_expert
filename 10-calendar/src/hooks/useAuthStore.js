import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import { onChecking, onClearErrorMessage, onLogin, onLogout } from '../store'

const useAuthStore = () => {
    const { 
        status, 
        user, 
        errorMessage 
    } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const login = async ({ email, password }) => {
        dispatch(onChecking());

        const data = {
            email,
            password,
        };

        try {
            const response = await calendarApi.post('/auth/login', data);
            const responseData = response.data.data;

            localStorage.setItem('token', responseData.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            const user = {
                name: responseData.name, 
                uid: responseData.uid
            }
            
            dispatch(onLogin({ user }));
        } catch(e) {
            dispatch(onLogout({ errorMessage: e.response?.data?.message || 'An error occurred. Please try again.' }));

            setTimeout(() => {
                dispatch(onClearErrorMessage());
            }, 10);
        }
    }

    const signUp = async ({ name, email, password }) => {
        dispatch(onChecking());

        const data = {
            name,
            email,
            password,
        };

        try {
            const response = await calendarApi.post('/auth/signup', data);
            const responseData = response.data.data;

            localStorage.setItem('token', responseData.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            const user = {
                name: responseData.name, 
                uid: responseData.uid
            }
            
            dispatch(onLogin({ user }));
        } catch(e) {
            dispatch(onLogout({ errorMessage: e.response?.data?.message || 'An error occurred. Please try again.' }));

            setTimeout(() => {
                dispatch(onClearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');

        if (token === undefined || token === null) {
            return dispatch(onLogout());
        }

        try {
            const response = await calendarApi.get('/auth/renewtoken');
            const responseData = response.data.data;

            localStorage.setItem('token', responseData.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            const user = {
                name: responseData.name, 
                uid: responseData.uid
            }
            
            dispatch(onLogin({ user }));
        } catch(e) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const logout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    return {
        // Properties.
        status, 
        user, 
        errorMessage,

        // Methods.
        checkAuthToken,
        login,
        logout,
        signUp,
    }
}

export default useAuthStore;