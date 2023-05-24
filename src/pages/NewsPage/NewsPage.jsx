import NewsList from '../../shared/components/NewsList/NewsList';
import NoticesSearch from '../../shared/components/NoticesSearch/NoticesSearch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Pagination from 'shared/components/Pagination/Pagination';
import { Title } from './NewsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, fetchNewsByQuery2 } from 'redux/news/operations';

import {
  selectAllNews,
  selectHints,
  selectNewsError,
} from 'redux/news/selectors';
import { setNews } from 'redux/news/actions';

const NewsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAllNews);
  const { totalHints, hints } = useSelector(selectHints);
  const isError = useSelector(selectNewsError);
  const [totalPages, setTotalPages] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || 1;
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    dispatch(setNews());

    const getNews = (searchQuery, page) => {
      const fetchNewsByQuery = () => {
        dispatch(
          searchQuery
            ? fetchNewsByQuery2({ query: searchQuery, page: page })
            : fetchNews({ page: page })
        );
      };
      return fetchNewsByQuery();
    };

    getNews(searchQuery, page);
  }, [dispatch, searchQuery, page]);

  useEffect(() => {
    if (totalHints) {
      const pages = Math.ceil(totalHints / hints);
      setTotalPages(pages);
    }
  }, [totalHints, hints]);

  const onSearch = searchQuery => {
    var currentQuery = searchParams.get('query') || '';
    if (searchQuery !== currentQuery) {
      var params = searchQuery ? { query: searchQuery, page: 1 } : { page: 1 };
      setSearchParams(params);
    }
    //getNews(searchQuery, 1);
  };

  const clearWaitingQueue = () => {
    toast.clearWaitingQueue();
  };

  const onPageChange = currentPage => {
    if (page === currentPage) {
      return;
    }
    var params = searchQuery
      ? { query: searchQuery, page: currentPage }
      : { page: currentPage };
    setSearchParams(params);
  };

  return (
    <>
      <Title> News</Title>
      <NoticesSearch onFormSubmit={onSearch}></NoticesSearch>

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
      {!isError && (
        <Pagination
          currentPage={Number(page)}
          totalPagesCount={totalPages}
          onPageChange={page => onPageChange(page)}
        />
      )}
    </>
  );
};

export default NewsPage;
