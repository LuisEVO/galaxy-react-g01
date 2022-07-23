import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthRoute = ({ children }) => {
  // const [token] = useState(localStorage.getItem('Token'))
  const {token} = useSelector(state => state.auth)

  /**
   * Validar token
   * https://www.npmjs.com/package/@auth0/angular-jwt
   * - tenga estructura del token
   * - que no este expirada
   */

  if (!token) {
    return <Navigate to={'/login'} replace />
  }

  return children
}

export default AuthRoute