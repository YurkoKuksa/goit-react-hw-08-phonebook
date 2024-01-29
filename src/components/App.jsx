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
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import NotFound from 'pages/NotFound/NotFound';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  // const dispatch = useDispatch();

  //   // useEffect(() => {
  //   //   dispatch(refreshUser());
  //   // }, [dispatch]);
  // return
  /*  isRefreshing ? (
    <b>Refreshing user...</b>
  ) :  */
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// export const App = () => {
//
//   const { isRefreshing } = useAuth();

//
//     <Routes>
//
//         <Route index element={<HomePage />} />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/tasks"
//           element={
//             <PrivateRoute redirectTo="/login" component={<TasksPage />} />
//           }
//         />
//       </Route>
//     </Routes>
//   );
// };
