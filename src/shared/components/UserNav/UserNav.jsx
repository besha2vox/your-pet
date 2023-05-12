import PropTypes from 'prop-types';
import { UserIcon } from 'shared/utils/icons';
import { Wrapper } from './UserNav.styled';

const UserNav = ({ userName, showName, setIsOpen }) => {
  return (
    <Wrapper to="/user" onClick={() => setIsOpen(false)}>
      <UserIcon />
      {showName && userName}
    </Wrapper>
  );
};

UserNav.propTypes = {
  userName: PropTypes.string.isRequired,
  showName: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default UserNav;
