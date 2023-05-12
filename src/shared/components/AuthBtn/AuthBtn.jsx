import PropTypes from 'prop-types';
import { Btn } from './AuthBtn.styled';

const AuthBtn = ({ path, text, icon, clickHandler }) => {
  return (
    <Btn to={path} onClick={clickHandler && (() => clickHandler(false))}>
      {text}
      {icon}
    </Btn>
  );
};

AuthBtn.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  clickHandler: PropTypes.func,
};

export default AuthBtn;
