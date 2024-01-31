// import { useEffect, lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/PublicRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import { refreshUserThunk } from 'myRedux/auth/operations';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
