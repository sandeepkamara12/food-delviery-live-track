import {lazy, Suspense} from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Hola from './components/user/Hola';
import Template from './pages/Template';
import useGetCity from './hooks/useGetCity';
import OwnerDashboard from './pages/OwnerDashboard';
import CreateEditShop from './pages/CreateEditShop';
import CreateItem from './pages/CreateItem';
import EditItem from './pages/EditItem';
import { ShopProvider } from './providers/ShopProvider';

// import Users from './components/user/Users';
// import Login from './components/common/Login';
// import Register from './components/common/Register';
// import SidebarLayout from './components/layouts/SidebarLayout';
// import OuterLayout from './components/layouts/OuterLayout';
// import MailVerification from './components/common/MailVerification';
// import VerifyForgotPasswordOtp from './components/common/forgotPassword/VerifyForgotPasswordOtp';
// import ResetPassword from './components/common/forgotPassword/ResetPassword';
// import ForgotPassword from './components/common/forgotPassword/ForgotPassword';
// import Loader from './components/common/Loader';
// import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';


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
            {/* <Route path="/template" element={<Template />} /> */}
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
            <Route path="/hola" element={<Hola />} />
          </Route>
        </Route>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
