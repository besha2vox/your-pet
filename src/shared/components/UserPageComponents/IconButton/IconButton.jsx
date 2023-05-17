import PropTypes from 'prop-types';
import { Btn } from '../../Button/Button.styled';

const Button = ({ type, text, icon, clickHandler, filled, short, heart }) => {
  return (
    <Btn
      type={type}
      onClick={clickHandler}
      filled={filled}
      short={short}
      heart={heart}
    >
      {text}
      {icon}
    </Btn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
