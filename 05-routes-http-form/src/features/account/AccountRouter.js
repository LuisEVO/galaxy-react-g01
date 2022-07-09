import { Navigate, Route, Routes } from 'react-router-dom';
import AccountLayout from './Layout/Layout';
import OrdersPage from './pages/OrdersPage';
import ProfilePage from './pages/ProfilePage';

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

export default AccountRouter;
