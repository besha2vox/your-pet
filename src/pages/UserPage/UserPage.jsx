import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo, changeStatus } from 'redux/auth/operations';
import UserData from 'shared/components/UserPageComponents/UserData/UserData';
import PetsData from 'shared/components/UserPageComponents/PetsData/PetsData';
import ModalCongrats from 'shared/components/UserPageComponents/ModalCongrats/ModalCongrats';
import { selectUser } from 'redux/auth/selectors';
import Modal from 'shared/components/Modal/Modal';
import { MainContent, TitleWrap, Title, Card } from './UserPage.styled';

const UserPage = () => {
  const [congradModal, setCongradModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  const { id } = useSelector(selectUser);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    if (id) {
      setUserId(id);
      dispatch(getUserInfo(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (user && user.firstVisit) {
      setIsModalOpen(true);
      setCongradModal(true);
    }
  }, [user]);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
    setCongradModal(prevState => !prevState);
    dispatch(changeStatus({ firstVisit: 'false' }));
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
            <UserData user={user} userId={userId} />
          </Card>
        </div>
        <div style={{ position: 'relative', width: '100%' }}>
          {user && user.pet && <PetsData pets={user.pet} />}
        </div>
      </MainContent>
    </>
  );
};
export default UserPage;
