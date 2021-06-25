import firebase from 'firebase' ;
import { Actions } from 'react-native-router-flux';

export const EMAIL_CHANGED ='email_changed';
export const PASSWORD_CHANGED ='password_changed';
export const LOGIN_USER_SUCCESS='login_user_success';
export const LOGIN='login';
export const LOGIN_USER_FAILED ='login_user_failed';

    // EMAİL DEĞİŞTİĞİNDE ACTION 
export const emailChanged=(text) => {
    return {
        type: EMAIL_CHANGED,
        payload:text
    }
}

    // PASSWORD DEĞİŞTİĞİNDE ACTİON
export const passwordChanged =(password) => {

    return {
        type : PASSWORD_CHANGED,
        payload:password
    }
}

// USER GİRİŞ YAPINCA ACTION
export const loginUser = (email,password) => {
    return (dispatch) => {
        dispatch({
            // dönme animasyonu için böyle birşey tanımladım
            type:LOGIN
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({
                    type:LOGIN_USER_SUCCESS, payload:user
                })
                Actions.main();
            })
            .catch(()=>{
                dispatch({
                    type:LOGIN_USER_FAILED
                })
            })

    }    
    
   
}