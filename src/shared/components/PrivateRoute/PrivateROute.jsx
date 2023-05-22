import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import Loader from '../Loader/Loader';

const PrivateRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
