import { signInWithGoogle } from '../../../firebase/providers';
import { checkingCredentials, login, logout } from '../authSlice';

export default function execSignInWithGoogle() {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    
        const response = await signInWithGoogle();

        if (!response.success) {
            return dispatch(logout(response));
        }

        dispatch(login(response));
    };
}