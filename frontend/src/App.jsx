import {lazy, Suspense} from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useGetCity from './hooks/useGetCity';
import OwnerDashboard from './pages/OwnerDashboard';
import CreateEditShop from './pages/CreateEditShop';
import CreateItem from './pages/CreateItem';
import EditItem from './pages/EditItem';
import { ShopProvider } from './providers/ShopProvider';

const Login = lazy(()=>import('./components/common/Login'));
const Users = lazy(()=>import('./components/user/Users'));
const Register = lazy(()=>import('./components/common/Register'));
const SidebarLayout = lazy(()=>import('./components/layouts/SidebarLayout'));
const OuterLayout = lazy(()=>import('./components/layouts/OuterLayout'));
const MailVerification = lazy(()=>import('./components/common/MailVerification'));
const VerifyForgotPasswordOtp = lazy(()=>import('./components/common/forgotPassword/VerifyForgotPasswordOtp'));
const ResetPassword = lazy(()=>import('./components/common/forgotPassword/ResetPassword'));
const ForgotPassword = lazy(()=>import('./components/common/forgotPassword/ForgotPassword'));
const Loader = lazy(()=>import('./components/common/Loader'));
const PublicRoute = lazy(()=>import('./routes/PublicRoute'));
const PrivateRoute = lazy(()=>import('./routes/PrivateRoute'));

function App() {
useGetCity();
  return (
    <>
      <ToastContainer position="top-right" /> 
      <Suspense fallback={<Loader />}>
      <Routes>
        {/* Routes, those both users and admin can access */}
        <Route element={<PublicRoute />} >
          <Route element={<OuterLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-forgot-password-otp" element={<VerifyForgotPasswordOtp />} />
            <Route path="/reset-forgot-password" element={<ResetPassword />} />
            <Route path="/mail-verification" element={<MailVerification />} />
          </Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<SidebarLayout />}>
            <Route path="/users" element={<Users />} />
          </Route>
        </Route>
        <Route element={<ShopProvider><PrivateRoute /></ShopProvider>}>
          <Route element={<SidebarLayout />}>
            <Route path="/owner" element={<OwnerDashboard />} />
            <Route path="/create-shop" element={<CreateEditShop />} />
            <Route path="/create-item" element={<CreateItem />} />
            <Route path="/edit-item/:itemId" element={<EditItem />} />
          </Route>
        </Route>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
