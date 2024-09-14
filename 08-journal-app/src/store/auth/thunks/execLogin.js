import { login, checkingCredentials } from '../authSlice';

export default function execLogin(email, password) {
    return async(dispatch) => {
        // TODO.
        dispatch(checkingCredentials());
    };
}