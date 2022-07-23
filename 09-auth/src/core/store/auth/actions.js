import AuthHttp from '../../../features/auth/http/auth-http';
import { authSlice, purchaseSlice } from './reducer';

const fetchSignIn = (credentials) => {
  return (dispatch, getState) => {
    AuthHttp.signIn(credentials)
      .then(res => {
        dispatch(authSlice.actions.setToken(res.accessToken))
      })
  }
}

const AuthActions = {
  ...authSlice.actions,
  fetchSignIn
}

export default AuthActions