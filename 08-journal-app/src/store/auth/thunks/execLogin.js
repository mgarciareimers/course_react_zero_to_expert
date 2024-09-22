import { signInWithEmailPassword } from '../../../firebase/providers';
import { checkingCredentials, login, logout } from '../authSlice';

export default function execLogin(email, password) {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    
        const response = await signInWithEmailPassword({ email, password });

        if (!response.success) {
            return dispatch(logout(response));
        }

        dispatch(login(response));
    };
}