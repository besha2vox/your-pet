import NewsList from '../../shared/components/NewsList/NewsList';
import NoticesSearch from '../../shared/components/NoticesSearch/NoticesSearch';
import { useState, useEffect } from 'react';

import Container from 'shared/components/Container/Container';
//import news from './news.json';
//import Section from 'shared/components/Section/Section';

import { Title } from './NewsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, fetchNewsByQuery2} from 'redux/news/operations';

import { getAllNews, getHintsh } from 'redux/news/selectors';

const NewsPage = () => {

  const dispatch = useDispatch();
  const data = useSelector(getAllNews);
  const hints = useSelector(getHintsh);

  //console.log(hints);

  useEffect(() => {
    const fetchAllNews = async () => await dispatch(fetchNews());
    fetchAllNews();
  }, [dispatch]);

  const onSearch = (searchQuery) => {
    console.log(searchQuery);
    const fetchNewsByQuery = async () => await dispatch(fetchNewsByQuery2(searchQuery));
    fetchNewsByQuery(searchQuery);
  }

  return (
    <Container>
      <Title> News</Title>
      <NoticesSearch onFormSubmit = {onSearch}>

      </NoticesSearch>
      <NewsList data={data} />
    </Container>
  );
};

export default NewsPage;
