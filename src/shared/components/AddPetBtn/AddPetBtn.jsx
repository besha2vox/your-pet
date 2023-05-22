import PropTypes from 'prop-types';
import { PlusIcon, PlusSmallIcon } from 'shared/utils/icons';
import { useWindowSize } from 'hooks/useResize';
import { Btn } from './AddPetBtn.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const AddPetBtn = ({ text, path, toggleUnauthorizeModal, isFixed }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const [screenWidth] = useWindowSize();

  const onAddBtnClick = e => {
    if (!isLoggedIn) {
      e.preventDefault();
      toggleUnauthorizeModal();
      return false;
    }
  };

  return (
    <Btn
      to={path}
      state={{ from: location }}
      onClick={onAddBtnClick}
      isFixed={isFixed}
    >
      {screenWidth < 768 && <PlusIcon />}
      {text}
      {screenWidth >= 768 && <PlusSmallIcon />}
    </Btn>
  );
};

AddPetBtn.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  toggleUnauthorizeModal: PropTypes.func,
  isFixed: PropTypes.bool.isRequired,
};

export default AddPetBtn;
