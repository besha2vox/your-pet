import NewsList from '../../shared/components/NewsList/NewsList';
import NoticesSearch from '../../shared/components/NoticesSearch/NoticesSearch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'shared/components/Loader/Loader';

import Container from 'shared/components/Container/Container';
//import news from './news.json';
//import Section from 'shared/components/Section/Section';
import Pagination from 'shared/components/Pagination/Pagination';
import { Title } from './NewsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, fetchNewsByQuery2 } from 'redux/news/operations';

import { getAllNews, getHints, loading, error } from 'redux/news/selectors';

const NewsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAllNews);
  const { totalHints, hints } = useSelector(getHints);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);
  const [totalPages, setTotalPages] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || 1;

  useEffect(() => {
    const fetchAllNews = async () => await dispatch(fetchNews({ page }));

    fetchAllNews();
  }, [dispatch, page]);

  useEffect(() => {
    if (totalHints) {
      const pages = Math.ceil(totalHints / hints);
      setTotalPages(pages);
    }
  }, [totalHints, hints]);
  const onSearch = searchQuery => {
    const fetchNewsByQuery = async () => {
      await dispatch(fetchNewsByQuery2(searchQuery));
    };
    return fetchNewsByQuery(searchQuery);
  };

  const clearWaitingQueue = () => {
    toast.clearWaitingQueue();
  };

  const onPageChange = currentPage => {
    if (page === currentPage) {
      return;
    }
    setSearchParams({ page: currentPage });
  };

  return (
    <Container>
      <Title> News</Title>
      <NoticesSearch onFormSubmit={onSearch}></NoticesSearch>
      {isLoading && <Loader />}

      {isError &&
        (toast.warn('Nothing have found. Try smth else!', {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        }),
        clearWaitingQueue())}
      <NewsList data={data} />
      <ToastContainer limit={1} />

      <Pagination
        currentPage={Number(page)}
        totalPagesCount={totalPages}
        onPageChange={page => onPageChange(page)}
      />
    </Container>
  );
};

export default NewsPage;
