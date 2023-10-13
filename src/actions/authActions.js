// src/actions/authActions.js
import { setUser, clearUser } from '../slices/authSlice';
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

export const loginWithGoogle = () => (dispatch) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            dispatch(setUser(result.user));
        })
        .catch((error) => {
            console.error(error);
        });
};

export const logout = () => (dispatch) => {
    signOut(auth)
        .then(() => {
            dispatch(clearUser());
            //clear local storage
            localStorage.removeItem('profileData');
        })
        .catch((error) => {
            console.error(error);
        });
};
