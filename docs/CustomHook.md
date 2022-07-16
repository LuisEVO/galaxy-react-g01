# Custom Hook 

## useStateCrud

```
import { useCallback, useState } from 'react'
/**
 * CustomHook
 * Reglas
 * debe ser una funcion
 * debe usar al menos un hook de react o un custom hook dentro del codigo
 * debe retornar un valor sea primitivo o complejo
 * si tengo una funcion, envolverla en useCallback
 * 
 * puede recibir o no parametros
 */
export default function useStateCrud(initialValues) {
  const [items, setItems] = useState(initialValues);

  const addItem = useCallback((attrs) => {
    const newItem = {
      id: items.length + 1,
      ...attrs
    };
    setItems((items) => [...items, newItem]);
  }, [items]);

  const updateItem = useCallback((id, attrs) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, ...attrs };
        }
        return item;
      });
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }, []);

  return {
    items,
    addItem,
    updateItem,
    removeItem
  }
}
```