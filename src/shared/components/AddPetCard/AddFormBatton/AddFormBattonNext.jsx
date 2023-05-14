import PropTypes from 'prop-types';
import { NextButton } from './AddFormBatton.styled';

const AddFormButtonNext = ({
  text,
  icon,
  clickHandler,
  filled,
  short,
  type,
}) => {
  return (
    <NextButton
      type={type}
      onClick={clickHandler && (() => clickHandler(false))}
      filled={filled}
      short={short}
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
};

export default AddFormButtonNext;
