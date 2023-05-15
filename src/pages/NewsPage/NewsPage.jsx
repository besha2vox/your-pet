import NewsList from '../../shared/components/NewsList/NewsList';
import NoticesSearch from '../../shared/components/NoticesSearch/NoticesSearch';
import {  useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'shared/components/Loader/Loader';

import Container from 'shared/components/Container/Container';
//import news from './news.json';
//import Section from 'shared/components/Section/Section';

import { Title } from './NewsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, fetchNewsByQuery2 } from 'redux/news/operations';

import { getAllNews, getHintsh, loading ,error} from 'redux/news/selectors';

const NewsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAllNews);
  const hints = useSelector(getHintsh);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  //console.log(hints);

  useEffect(() => {
    const fetchAllNews = async () => await dispatch(fetchNews());
    fetchAllNews();
  }, [dispatch]);

  const onSearch = searchQuery => {
    const fetchNewsByQuery = async () => {
      await dispatch(fetchNewsByQuery2(searchQuery));
    };
    return fetchNewsByQuery(searchQuery);
  };

  const clearWaitingQueue = () => {
     toast.clearWaitingQueue();
  }
 
  return (
    <Container>
      <Title> News</Title>
      <NoticesSearch onFormSubmit={onSearch}></NoticesSearch>
      {isLoading && <Loader />}

      {isError && (toast.warn('Nothing have found. Try smth else!', {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
            
          }), clearWaitingQueue())}
      <NewsList data={data} />
      <ToastContainer limit={1}/>
      
    </Container>
  );
};

export default NewsPage;
