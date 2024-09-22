import { logoutWithGoogle } from '../../../firebase/providers';
import { logout } from '../authSlice';

export default function execLogout() {
    return async (dispatch) => {    
        const response = await logoutWithGoogle();

        if (!response.success) {
            return;
        }

        dispatch(logout(response));
    };
}