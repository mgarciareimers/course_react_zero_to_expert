import { login, checkingCredentials } from '../authSlice';

export default function loginThunk(email, password) {
    return async(dispatch) => {
        // TODO.
        dispatch(checkingCredentials());
    };
}