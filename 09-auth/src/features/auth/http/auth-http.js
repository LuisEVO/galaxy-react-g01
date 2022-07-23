import Http from '../../../common/http';

const endpoint = 'http://localhost:3001'

const signIn = (body) => {
  return Http.post(`${endpoint}/login`, body)
    .then(res => {
      localStorage.setItem('Token', res.accessToken);
      return res
    })
}

const AuthHttp = {
  signIn
}

export default AuthHttp;