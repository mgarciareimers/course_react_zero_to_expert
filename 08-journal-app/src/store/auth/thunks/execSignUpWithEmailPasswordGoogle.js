import { signUpWithEmailPassword } from '../../../firebase/providers';
import { checkingCredentials, login, logout } from '../authSlice';

export default function execSignUpWithEmailPasswordGoogle(displayName, email, password) {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    
        const response = await signUpWithEmailPassword({ displayName, email, password });

        if (!response.success) {
            return dispatch(logout(response));
        }

        dispatch(login(response));
    };
}