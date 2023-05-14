import PropTypes from 'prop-types';

import { BackButton } from './AddFormBatton.styled';
import { ArrowLeftIcon } from 'shared/utils/icons';

const AddFormButtonBack = ({ text, clickHandler, type }) => {
  return (
    <BackButton onClick={clickHandler} type={type}>
      <ArrowLeftIcon />
      {text}
    </BackButton>
  );
};

AddFormButtonBack.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default AddFormButtonBack;
