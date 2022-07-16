import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PurchaseProvider from './context/PurchaseContext/PurchaseProvider';
import usePurchaseContext from './context/PurchaseContext/usePurchaseContext';
import PurchaseLayout from './Layout/Layout';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';

const Protected = ({ children }) => {
  const { state } = usePurchaseContext();

  console.log(state.step1.plan)
  console.log(state.step1.account)

  if (!(state.step1.plan && state.step1.account)) {
    return <Navigate to={'../paso-1'} replace />;
  }

  return children;
};

const PuchaseRouter = () => {
  return (
    <PurchaseProvider>
      <Routes>
        <Route path='/' element={<PurchaseLayout />}>
          <Route index element={<Navigate to={'paso-1'} replace />} />
          <Route path='paso-1' element={<Step1 />}></Route>
          <Route
            path='paso-2'
            element={
              <Protected>
                <Step2 />
              </Protected>
            }
          ></Route>
        </Route>
      </Routes>
    </PurchaseProvider>
  );
};

export default PuchaseRouter;
