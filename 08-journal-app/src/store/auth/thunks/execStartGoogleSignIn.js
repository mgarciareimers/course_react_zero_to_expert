import { checkingCredentials } from '../authSlice';

export default function execStartGoogleSignIn() {
    return async(dispatch) => {
        // TODO.
        dispatch(checkingCredentials());
    };
}