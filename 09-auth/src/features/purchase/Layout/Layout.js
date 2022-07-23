import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import LayoutStepper from './LayoutStepper';
import LayoutProvider from '../context/LayoutContext/LayoutProvider';

const PurchaseLayout = () => {
  // const [token] = useState(localStorage.getItem('Token'))
  const { token } = useSelector(state => state.auth)

  if (!token) {
    return <Navigate to={'/login'} replace />
  }

  return (
    <LayoutProvider>
    <main>
      <Box
        sx={{
          maxWidth: '400px',
          margin: 'auto',
          pt: '2rem',
        }}
      >
        <LayoutStepper />
        <Box
          sx={{
            maxWidth: '95%',
            margin: 'auto',
            pt: '3rem',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </main>
    </LayoutProvider>
  );
};

export default PurchaseLayout;
