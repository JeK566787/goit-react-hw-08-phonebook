import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactPage from 'pages/ContactPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="register" element={<RegisterPage />} /> */}
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="contacts"
              component={<RegisterPage />}
            />
          }
        />
        {/* <Route path="login" element={<LoginPage />} /> */}
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="contacts" element={<ContactPage />} /> */}
      </Route>
    </Routes>
  );
};
