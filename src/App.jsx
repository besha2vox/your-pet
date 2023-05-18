import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/operations';

import SharedLayout from 'shared/SharedLayout/SharedLayout';
import AddPetPage from 'pages/AddPetPage/AddPetPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';
import NewsPage from 'pages/NewsPage/NewsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import UserPage from 'pages/UserPage/UserPage';

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
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="add-pet" element={<AddPetPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
