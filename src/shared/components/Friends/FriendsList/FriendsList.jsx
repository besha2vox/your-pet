import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { loading } from 'redux/friends/selectors';

import { FriendsItem } from './../FriendsItem/FriendsItem';
import { FriendList } from './FriendsList.styled';
import FriendCardSkeleton from 'shared/components/Skeleton/FriendsCardSkeleton/FriendsCardSkeleton';

const FriendsList = ({ friends }) => {
  const isLoading = useSelector(loading);
  const friendsList = friends.map(
    ({
      _id,
      title,
      url,
      addressUrl,
      imageUrl,
      address,
      workDays,
      phone,
      email,
    }) => (
      <FriendsItem
        key={_id}
        title={title}
        siteUrl={url}
        mapUrl={addressUrl}
        imageUrl={imageUrl}
        adress={address}
        workDays={workDays}
        phone={phone}
        email={email}
      />
    )
  );

  return (
    <>
      {isLoading && <FriendList>{<FriendCardSkeleton count={9} />}</FriendList>}
      {!isLoading && <FriendList>{friendsList}</FriendList>}
    </>
  );
};

export default FriendsList;

FriendsList.defaultProps = {
  items: [],
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      addressUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
};
