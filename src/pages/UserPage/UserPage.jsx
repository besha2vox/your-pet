import UserData from '../../shared/components/UserPageComponents/UserData/UserData';
import PetsData from '../../shared/components/UserPageComponents/PetsData/PetsData';
import Logout from '../../shared/components/Logout/Logout';
import ModalCongrats from '../../shared/components/UserPageComponents/ModalCongrats/ModalCongrats';
import { useState, useEffect } from 'react';
import Modal from 'shared/components/Modal/Modal';

const UserPage = () => {
  // const dispatch = useDispatch();
  // const isFirstVisit = useSelector(state => state.firstVisit);
  const [congradModal, setCongradModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const firstVisit = false;

  useEffect(() => {
    if (firstVisit) {
      setIsModalOpen(true);
      setCongradModal(true);
    }
  }, [firstVisit]);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
    setCongradModal(prevState => !prevState);
    // dispatch() // Отправляем новое значение в store
  };

  return (
    <>
      {isModalOpen && congradModal && (
        <Modal toggleModal={toggleModal}>
          <ModalCongrats toggleModal={toggleModal} />
        </Modal>
      )}
      <p>My information:</p>
      <div>
        <UserData />
        <Logout />
        {/* <UserData />
            UserDataItem --- input типу файл, url object -предпросмотр, 
            дані користувача + кнопка для редагування
            клік на кнопку - елемент в режимі редагування + кнопка для відправки
            доступно 1 поле для редагування */}
        {/* <Logout /> По кліку відкривається модальне вікно ModalApproveAction (Already leaving?)
        Треба очистити redux стор після виходу !*/}
      </div>
      <p>My pets:</p>
      <div>
        <PetsData />
        {/* <Add pet/> кнопка посилання на AddPetPage */}
        {/* <PetsList - де взяти тих звірів?/> */}
        {/* PetsItem + ModalApproveAction (якщо так -*/}
      </div>
    </>
  );
};

export default UserPage;
