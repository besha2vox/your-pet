import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { CrossSmallIcon } from 'shared/utils/icons';
import { Backdrop, ModalWindow, CloseBtn } from './Modal.styled';

const modalContainer = document.getElementById('modal-root');

//додати у батьківський компонент (сторінку) наступний код:
// - state:
// const [isModalOpen, setIsModalOpen] = useState(false);

// - функцію:
// const toggleModal = () => {
//   setIsModalOpen(prevState => !prevState);
// };

// - приклад використання:
// {isModalOpen && (
//     <Modal toggleModal={toggleModal}>
//       {children}
//     </Modal>
//   );}

const Modal = ({ toggleModal, children }) => {
  console.log('children: ', children);
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleModal]);

  const onModalOpen = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };
  return createPortal(
    <Backdrop onClick={onModalOpen}>
      <ModalWindow>
        <CloseBtn type="button" onClick={toggleModal}>
          <CrossSmallIcon />
        </CloseBtn>
        {children}
      </ModalWindow>
    </Backdrop>,
    modalContainer
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;
