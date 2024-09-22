import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth';
import { firebaseAuth } from '../firebase/config';

export const useCheckAuth = () => {
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, async (user) => {
            if (user === undefined || user === null) {
                return dispatch(logout());
            }   

            const { uid, displayName, email, photoURL } = user;

            dispatch(login({ uid, displayName, email, photoURL }));
        });
    }, [ ]);

    return {
        status
    };
}
