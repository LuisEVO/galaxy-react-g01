import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthActions from '../../../core/store/auth/actions';

const Login = () => {
  const [credentials] = useState({
    email: 'admin@gmail.com',
    password: 'root1234'
  })
  const { authSuccess } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signIn = () => {
    dispatch(AuthActions.fetchSignIn(credentials))
  }

  useEffect(() => {
    if (authSuccess) {
      navigate('/compra');
    }
  }, [authSuccess, navigate])

  return (
    <div>
      <button onClick={signIn}>Ingresar</button>
    </div>
  )
}

export default Login