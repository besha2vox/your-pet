import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchFriends } from 'redux/friends/operations';

import FriendsList from './../../shared/components/Friends/FriendsList/FriendsList';

import Loader from 'shared/components/Loader/Loader';

import { getAllFriends, loading, error } from './../../redux/friends/selectors';

import { FriendsPageTitle, NoFriendsOnPage } from './OurFriendsPage.styled';

// import friendsOffline from './friends';

const OurFriendsPage = () => {
  let friends = useSelector(getAllFriends);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      await dispatch(fetchFriends());
    };
    fn();
  }, [dispatch]);

  const isFriends = Boolean(friends.length);

  return (
    <>
      <FriendsPageTitle>Our Friends</FriendsPageTitle>
      {isLoading && <Loader />}
      {isFriends && <FriendsList friends={friends} />}
      {!isFriends && <NoFriendsOnPage>No fiends in list</NoFriendsOnPage>}
      {isError && <NoFriendsOnPage>{isError}</NoFriendsOnPage>}
    </>
  );
};

export default OurFriendsPage;
