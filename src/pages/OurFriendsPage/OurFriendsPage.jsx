import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchFriends } from 'redux/friends/operations';
import { getHints } from './../../redux/friends/selectors';

import { useSearchParams } from 'react-router-dom';

import FriendsList from './../../shared/components/Friends/FriendsList/FriendsList';
import Pagination from 'shared/components/Pagination/Pagination';
import Loader from 'shared/components/Loader/Loader';

import { getAllFriends, loading, error } from './../../redux/friends/selectors';

import { FriendsPageTitle, NoFriendsOnPage } from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  const friends = useSelector(getAllFriends);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = useSelector(loading);
  const isError = useSelector(error);
  const { totalHints, hints } = useSelector(getHints);
  const dispatch = useDispatch();

  const page = searchParams.get('page') || 1;

  useEffect(() => {
    if (totalHints) {
      const pages = Math.ceil(totalHints / hints);
      setTotalPages(pages);
    }

    const fetchFriendsList = () => {
      dispatch(fetchFriends(page));
    };
    fetchFriendsList();
  }, [dispatch, page, totalHints, hints]);

  const onPageChange = currentPage => {
    if (page === currentPage) {
      return;
    }
    setSearchParams({ page: currentPage });
  };

  const isFriends = Boolean(friends.length);

  return (
    <>
      <FriendsPageTitle>Our Friends</FriendsPageTitle>
      {isLoading && <Loader />}
      {isFriends && <FriendsList friends={friends} />}
      {!isFriends && <NoFriendsOnPage>No fiends in list</NoFriendsOnPage>}
      {isError && (
        <NoFriendsOnPage>{`${isError}, try again later`}</NoFriendsOnPage>
      )}
      <Pagination
        currentPage={Number(page)}
        totalPagesCount={totalPages}
        onPageChange={page => onPageChange(page)}
      />
    </>
  );
};

export default OurFriendsPage;
