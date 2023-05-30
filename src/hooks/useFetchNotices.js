import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getNotices,
  getNoticesByQuery,
  getUsersNotices,
  getFavoriteNotices,
} from 'redux/notices/operations';
import { setNotices } from 'redux/notices/actions';
import { getTeam } from 'redux/team/operations';

export const useFetchNotices = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [query, setQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [categoryName]);

  useEffect(() => {
    dispatch(setNotices());

    setTeamFilter(false);

    const searchQuery = {
      page,
    };

    if (categoryName === 'my-pets') {
      if (query) searchQuery.query = query;
      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getUsersNotices({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    } else if (categoryName === 'favorite') {
      if (query) searchQuery.query = query;
      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getFavoriteNotices({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    } else if (!query) {
      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getNotices({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    } else {
      if (query) searchQuery.query = query;
      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getNoticesByQuery({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    }
  }, [
    ageFilter,
    categoryName,
    dispatch,
    genderFilter,
    page,
    query,
    setSearchParams,
    searchParams,
  ]);

  useEffect(() => {
    setQuery('');
    setAgeFilter('');
    setGenderFilter('');

    dispatch(setNotices());
    dispatch(getTeam());
  }, [dispatch, teamFilter]);

  const onPageChange = currentPage => {
    setPage(currentPage);
    if (page === currentPage) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const searchQuery = { page: currentPage };

    if (query) searchQuery.query = query;
    if (genderFilter) searchQuery.gender = genderFilter;
    if (ageFilter) searchQuery.age = ageFilter;

    setSearchParams(searchQuery);
  };

  return {
    queryParams: [page, teamFilter, genderFilter, ageFilter],
    methods: [
      setQuery,
      setGenderFilter,
      setAgeFilter,
      setTeamFilter,
      onPageChange,
    ],
  };
};
