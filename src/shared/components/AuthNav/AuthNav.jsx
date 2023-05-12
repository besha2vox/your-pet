import PropTypes from 'prop-types';
import AuthBtn from '../AuthBtn/AuthBtn';
import { PawPrintIcon } from 'shared/utils/icons';
import { List } from './AuthNav.styled';

const AuthNav = ({ setIsOpen }) => {
  return (
    <List>
      <li>
        <AuthBtn
          path="/login"
          text="Log IN"
          icon={<PawPrintIcon />}
          clickHandler={setIsOpen}
        />
      </li>
      <li>
        <AuthBtn
          path="/register"
          text="Registration"
          clickHandler={setIsOpen}
        />
      </li>
    </List>
  );
};

AuthNav.propTypes = {
  setIsOpen: PropTypes.func,
};

export default AuthNav;
