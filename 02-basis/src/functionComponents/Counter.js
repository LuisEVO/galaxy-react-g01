import { useEffect, useState } from 'react';

const FCounter = ({ initialCounter }) => {
  const [count, setCount] = useState(initialCounter);

  useEffect(() => {
    // cargar elementos
    return () => {
      // limpiar memoria
    }
  }, [])


  useEffect(() => {
    // suscribirme a eventos
    return () => {
      // desuscribirme de eventos
    }
  }, [])

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = (e, step) => {
    setCount(count - step)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increase} >Incrementar</button>
      <button onClick={(e) => decrease(e, 3)}>Decrementar</button>
    </div>
  )
}

export default FCounter;