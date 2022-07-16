# Rutas

La libreria mas usada `react-router-dom` version 6

## Instalación ultima version

```
npm install --save react-router-dom
yarn add react-router-dom
```

## Instalación version 5

```
npm install --save react-router-dom@5
yarn add react-router-dom@5
```

## Configuración Inicial

En el componente principal agregar `BrowserRouter` y `Routes`

```

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Inicio</h1>} />
        <Route path='/contactanos' element={<h1>Contactanos</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Redireccion

```
  <Route path='/' element={<Navigate to='inicio' replace />} />
```

## Ruta desconocida

```
  <Route path='*' element={<h1>404 No Econtrado</h1>} />
  <Route path='*' element={<Navigate to='inicio' replace />} />
```

## Navegacion

```
<Link to='/carrito'>Carrito</Link>
<NavLink to='/carrito' className={({ isActive }) => isActive ? 'active' : undefined }>Carrito</NavLink>
```

```
const navigate = useNavigate();

const algunaFuncionX = () => {
  // ...codigo
  navigate('/procesar-compra');
}
```

## Rutas Hijas

```
<Route path='/' element={<Layout />}>
  <Route path='inicio' element={<h1>Inicio</h1>} />
  <Route path='categoria' element={<h1>Categoria</h1>} />
  <Route path='carrito' element={<h1>Carrito</h1>} />
  <Route path='procesar-compra' element={<h1>Procesar Compra</h1>} />
</Route>
```

!Importante usar componente `<Outlet />` en el Layout
```
const Layout = () => {
  return (
    <div className={styles.container}>
      <header>
       {/** ... */}
      </header>
      <main>
        <Outlet /> {/** Rutas hijas aquí */}
      </main>
      <footer>{/** ... */}</footer>
    </div>
  );
};
```

## Lazy Loading

Rutas Principales: usar `Suspense`, `lazy` y agregar `*` al final del path

```
import { lazy, Suspense } from 'react';

const Account = lazy(() => import('./features/account/AccountRouter'));

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Cargando ...</p>} >
      <BrowserRouter>
        <Routes>
          <Route path='/cuenta/*' element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
```

Rutas Hijas
el path padre debe ser `/` y las rutas deben estar encerradas en `Routes`

```
const AccountRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<AccountLayout />}>
        <Route index element={<Navigate to='perfil' replace />} />
        <Route path='perfil' element={<ProfilePage />} />
        <Route path='pedidos' element={<OrdersPage />} />
      </Route>
    </Routes>
  );
};

```

## Enviar y capturar parametros

```
<Route path='categoria/:nombreDelParametro' element={<CategoryPage />} />

const { nombreDelParametro } = useParams();
```

## query params

```
const [searchParams] = useSearchParams();

searchParams.get('nombreDelQueryParam')
```
