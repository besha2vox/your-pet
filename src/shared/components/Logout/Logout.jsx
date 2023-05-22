import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { LogoutIcon } from 'shared/utils/icons';
import Modal from '../Modal/Modal';
import ModalApproveAction from '../UserPageComponents/ModalApproveAction/ModalApproveAction';
import { LogoutButton } from './Logout.styled';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handlerClick = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <>
      <LogoutButton onClick={toggleModal} type="button">
        <LogoutIcon stroke="#54ADFF" />
        Log out
      </LogoutButton>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <ModalApproveAction
            toggleModal={toggleModal}
            type="button"
            clickHandler={handlerClick}
            icon={<LogoutIcon style={{ fill: '#54ADFF' }} stroke="#FEF9F9" />}
          >
            Already leaving?
          </ModalApproveAction>
        </Modal>
      )}
    </>
  );
};
export default Logout;

Logout.propTypes = {};
