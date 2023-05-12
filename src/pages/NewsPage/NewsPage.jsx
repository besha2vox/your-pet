import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNews } from 'redux/news/operations';

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      await dispatch(fetchNews());
    };
    fn();
  }, [dispatch]);

  return <>{/* Тра-та-та */}</>;
};

export default NewsPage;
