import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to={'step-1'} replace />}></Route>
          <Route path='step-1' element={<Step1 />}></Route>
          <Route path='step-2' element={<Step2 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
