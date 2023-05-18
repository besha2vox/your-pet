import UserData from '../../shared/components/UserPageComponents/UserData/UserData';
import PetsData from '../../shared/components/UserPageComponents/PetsData/PetsData';
import ModalCongrats from '../../shared/components/UserPageComponents/ModalCongrats/ModalCongrats';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Modal from 'shared/components/Modal/Modal';
import { ReactComponent as AddPet } from '../../images/icons/plus-small.svg';
import {
  MainContent,
  TitleWrap,
  Title,
  Card,
  PetsHeader,
  AddPetButton,
} from './UserPage.styled';

const UserPage = () => {
  // const dispatch = useDispatch();
  // const isFirstVisit = useSelector(state => state.firstVisit);
  const [congradModal, setCongradModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const dispatch = useDispatch();
  // const handleSignup = data => {
  //   dispatch(logIn(data));
  // };

  const firstVisit = true;

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
      <MainContent>
        <div>
          <TitleWrap>
            <Title>My information:</Title>
          </TitleWrap>
          <Card>
            <UserData />
            {/* <Logout /> */}
            {/* <UserData />
            UserDataItem --- input типу файл, url object -предпросмотр, 
            дані користувача + кнопка для редагування
            клік на кнопку - елемент в режимі редагування + кнопка для відправки
            доступно 1 поле для редагування */}
            {/* <Logout /> По кліку відкривається модальне вікно ModalApproveAction (Already leaving?)
        Треба очистити redux стор після виходу !*/}
          </Card>
        </div>
        <div>
          <PetsHeader>
            <Title>My pets:</Title>
            <AddPetButton>
              Add pet
              <AddPet stroke="#FEF9F9" style={{ marginLeft: 8 }} />
            </AddPetButton>
          </PetsHeader>
          <PetsData />
        </div>
        {/* <Add pet/> кнопка посилання на AddPetPage */}
        {/* <PetsList - де взяти тих звірів?/> */}
        {/* PetsItem + ModalApproveAction (якщо так -*/}
      </MainContent>
    </>
  );
};

export default UserPage;