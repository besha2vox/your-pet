import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/operations';
import { lazy } from 'react';

// const HomePage = lazy(() => import('pages/HomePage/HomePage'));

import SharedLayout from 'shared/SharedLayout/SharedLayout';
import PrivateRoute from 'shared/components/PrivateRoute/PrivateROute';
import PublicRoute from 'shared/components/PublicRoute/PublicRoute';

const AddPetPage = lazy(() => import('pages/AddPetPage/AddPetPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="notices/:categoryName" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="user" element={<UserPage />} />
          <Route path="add-pet" element={<AddPetPage />} />
        </Route>

        <Route path="news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
