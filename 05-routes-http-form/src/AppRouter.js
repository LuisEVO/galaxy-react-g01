import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './core/Layout/Layout';
import CartPage from './core/pages/Cart';
import CategoryPage from './core/pages/CategoryPage';
import CheckoutPage from './core/pages/Checkout';
import HomePage from './core/pages/HomePage';

const Account = lazy(() => import('./features/account/AccountRouter'));

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Cargando ...</p>} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Navigate to='inicio' replace />} />
            <Route path='inicio' element={<HomePage />} />
            <Route path='categoria/:categoryName' element={<CategoryPage />} />
            <Route path='carrito' element={<CartPage />} />
            <Route path='procesar-compra' element={<CheckoutPage />} />
          </Route>

          <Route path='/cuenta/*' element={<Account />}></Route>

          <Route path='*' element={<Navigate to='inicio' replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
