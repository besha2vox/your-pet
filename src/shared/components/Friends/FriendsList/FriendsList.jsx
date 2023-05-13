import PropTypes from 'prop-types';

import { FriendsItem } from './../FriendsItem/FriendsItem';
import { FriendList } from './FriendsList.styled';

const FriendsList = ({ friends }) => {
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
      <FriendList>{friendsList}</FriendList>
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
