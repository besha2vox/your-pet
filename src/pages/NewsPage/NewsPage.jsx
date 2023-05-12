import NewsList from './NewsList';
import NewsFilter from './NewsFilter';
import { useState, useEffect } from 'react';

import Container from 'shared/components/Container/Container';
//import news from './news.json';
//import Section from 'shared/components/Section/Section';

import { Title } from './NewsPage.styled';
import { format } from 'date-fns';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch, useSelector } from 'react-redux';

import { fetchNews } from 'redux/news/operations';
import { getAllNews, getHintsh } from 'redux/news/selectors';

const NewsPage = () => {
  // const [data, setData] = useState([]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fn = async () => {
  //     var news = await dispatch(fetchNews());
  //     const formatDate = news.payload.result.map(item => ({
  //       ...item,
  //       date: Number(format(new Date(item.date), 'T')),
  //     }));
  //     const sortDate = formatDate.sort(function (a, b) {
  //       return b.date - a.date;
  //     });
  //     // console.log(sortDate);
  //     setData(sortDate);
  //   };
  //   fn();
  // }, [dispatch]);

  const dispatch = useDispatch();
  const data = useSelector(getAllNews);
  const hints = useSelector(getHintsh);

  console.log(hints);

  useEffect(() => {
    const fetchAllNews = async () => await dispatch(fetchNews());
    fetchAllNews();
  }, [dispatch]);

  // const data = news.map(item => ({
  //   ...item,
  //   date: Number(format(new Date(item.date), 'T')),
  // }));

  // useEffect(() => {
  //   const formatDate = news.map(item => ({
  //     ...item,
  //     date: Number(format(new Date(item.date), 'T')),
  //   }));
  //   const sortDate = formatDate.sort(function (a, b) {
  //     return b.date - a.date;
  //   });
  //   // console.log(sortDate);
  //   setData(sortDate);
  // }, []);

  const [filter, setFilter] = useState('');
  const [inputValue, setInputValue] = useState(false);

  const handleChange = event => {
    // console.log(filter.length);
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    filter.length > 0 ? setInputValue(true) : setInputValue(false);
  }, [filter.length]);

  const resetInput = event => {
    setFilter('');
  };

  function filterNews() {
    if (!filter) {
      return data;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filterlist = data.filter(news => {
      return news.title.toLocaleLowerCase().includes(normalizedFilter);
    });
    //console.log(filterlist);
    if (filterlist.length === 0) {
      Notify.warning('Write a correct request');
    }
    return filterlist;
  }

  return (
    <Container>
      <Title> News</Title>
      <NewsFilter
        input={filter}
        onChange={handleChange}
        resetInput={resetInput}
        inputValue={inputValue}
      />
      <NewsList data={filterNews()} />
    </Container>
  );
};

export default NewsPage;
