import PropTypes from 'prop-types';
import { Btn } from './IconButton.styled';

const IconButton = ({ type, icon, clickHandler }) => {
  return (
    <Btn type={type} onClick={clickHandler}>
      {icon}
    </Btn>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node,
  clickHandler: PropTypes.func.isRequired,
};

export default IconButton;
