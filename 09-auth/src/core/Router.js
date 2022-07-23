import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../features/auth/pages/login';
import AuthRoute from './guard/AuthRoute';

const Purchase = lazy(() => import('../features/purchase/Router'));

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/compra'} replace />} />
          <Route path='/login' element={<Login />} />
          
          <Route path='/compra/*' element={
              <Purchase />
          } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
