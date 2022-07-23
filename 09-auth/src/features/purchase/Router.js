import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import PurchaseLayout from './Layout/Layout';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';

const Protected = ({ children }) => {
  const { step1} = useSelector(state => state.purchase)
  if (!(step1.plan && step1.account)) {
    return <Navigate to={'../paso-1'} replace />;
  }

  return children;
};

const PuchaseRouter = () => {
  return (
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
  );
};

export default PuchaseRouter;
