import Modal from '../Modal/Modal';
import AuthNav from '../AuthNav/AuthNav';
import { Wrapper, Text } from './ModalUnAuthorized.styled';

const ModalUnAuthorized = ({ toggleUnauthorizeModal }) => {
  return (
    <Modal toggleModal={toggleUnauthorizeModal}>
      <Wrapper>
        <Text>Please log in first.</Text>
        <AuthNav />
      </Wrapper>
    </Modal>
  );
};

export default ModalUnAuthorized;
