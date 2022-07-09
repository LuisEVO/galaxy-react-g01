import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  const navigate = useNavigate();

  const saveCart = () => {
    // ...llamada http
    navigate('/procesar-compra');
  }

  return (
    <div>
      CartPage
      <button onClick={saveCart}>Procesar Pago</button>
    </div>
  )
}

export default CartPage