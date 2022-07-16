import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductCreate from './pages/Product/ProductCreate';
import ProductEdit from './pages/Product/ProductEdit';
import ProductList from './pages/Product/ProductList';

const AdminRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='productos' replace />}></Route>
      <Route path='productos' element={<ProductList />} ></Route>
      <Route path='productos/nuevo' element={<ProductCreate />} ></Route>
      <Route path='productos/editar/:id' element={<ProductEdit />} ></Route>
    </Routes>
  )
}

export default AdminRouter