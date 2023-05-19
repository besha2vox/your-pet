import PropTypes from 'prop-types';
import { NextButton } from './AddFormButton.styled';

const AddFormButtonNext = ({
  text,
  icon,
  clickHandler,
  filled,
  short,
  type,
  isDisabled,
}) => {
  return (
    <NextButton
      type={type}
      onClick={clickHandler && (() => clickHandler(false))}
      filled={filled}
      short={short}
      disabled={isDisabled}
    >
      {text}
      {icon}
    </NextButton>
  );
};

AddFormButtonNext.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  clickHandler: PropTypes.func,
  isDisabled: PropTypes.bool.isRequired,
};

export default AddFormButtonNext;
