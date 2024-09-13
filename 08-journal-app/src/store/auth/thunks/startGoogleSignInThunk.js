import { checkingCredentials } from '../authSlice';

export default function startGoogleSignInThunk() {
    return async(dispatch) => {
        // TODO.
        dispatch(checkingCredentials());
    };
}