import NewsList from '../../shared/components/NewsList/NewsList';
import NoticesSearch from '../../shared/components/NoticesSearch/NoticesSearch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import Pagination from 'shared/components/Pagination/Pagination';
import { Title, NewsWrapper } from './NewsPage.styled';
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
    <NewsWrapper>
      <Title> News</Title>
      <NoticesSearch onFormSubmit={onSearch}></NoticesSearch>

      <NewsList data={data} />

      {!isError && (
        <Pagination
          currentPage={Number(page)}
          totalPagesCount={totalPages}
          onPageChange={page => onPageChange(page)}
        />
      )}
    </NewsWrapper>
  );
};

export default NewsPage;
