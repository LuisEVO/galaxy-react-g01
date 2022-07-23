# Examen del curso de react

## Instalar dependencias

```
npm install
```

## Ejecutar Aplicación

```
npm start
```

## Ejecutar Mock Server

```
npm run server
```

### Logeo

- Endpoint publico POST `http://localhost:3001/login`
- Request
```
{
  "email": "admin@gmail.com",
  "password": "root1234"
}
```
- Response
```
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1ODM3NTU4NCwiZXhwIjoxNjU4Mzc5MTg0LCJzdWIiOiIxIn0.YtTCMWLKpRrC4KKDOEvzWqCHev5uRYHbolDsgPVXgVI",
  "user": {
      "email": "admin@gmail.com",
      "id": 1
  }
}
```

### Productos
- Endpoint publico GET `http://localhost:3001/products`
- Response 
```
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
  },
  ...
]
```

### Carrito
- Endpoint privado GET `http://localhost:3001/carts`
- Response 
```
[
  {
    "id": 3
    "userId": 1,
    "total": 822,
    "products": [
      {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
      },
      ...
    ]
  },
  ...
]
```

- Request Header
```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1ODM3NTU4NCwiZXhwIjoxNjU4Mzc5MTg0LCJzdWIiOiIxIn0.YtTCMWLKpRrC4KKDOEvzWqCHev5uRYHbolDsgPVXgVI" 
}
```

- Endpoint privado POST `http://localhost:3001/carts`
- Request 
```
{
  "id": 3
  "userId": 1,
  "total": 822,
  "products": [
      {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
      },
      ...
  ]
}
```

## Instrucciones

En la carpeta `src/pages` se encuentran 4 componentes de ayuda UI para el desarrollo de la aplicación

- Crear rutas y organizar proyecto
  - organizar el codigo en las carpetas `core`, `auth` y `account` (clasificar las paginas segun criterio) 
  - Establecer la pagina principal, lazy loading y pagina no encontrada

- Home
  - Consumir api de Productos
  - Al hacer click en el boton `agregar al carrito` se debe construir un estado (redux o context) y guardar los productos
  - En el header debe Actualizarse el numero de productos del carrito
  - En el header el boton carrito debe redirigir a la pantalla respectiva

- Cart (Carrito)
  - Mostrar los productos guardados en el estado
  - Calcular el total
  - Permitir eliminar productos del carrito
  - Al hacer click en `Procesar compra`
    - Si no esta logeado redirigir a la pagina de Logeo
    - Si esta logueado consumir el servicio POST del Endpoint cart (OPCIONAL)

- login
  - Configurar formulario
  - Validaciones
    - usuario debe ser requerido y tener formato email 
    - contraseña debe ser requerido, minimo 6 caracteres y maximo 15
    - consumir servicio `login`, guardar token en el `localStorage` y en estado global
    - redirigir al carrito

- Una vez logueado
  - En el header debe mostrarse la opcion `Mis Pedidos`
  - En la pagina mis pedidos consumir endpoint GET `carts`