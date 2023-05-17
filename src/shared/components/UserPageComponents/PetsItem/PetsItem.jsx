import { ReactComponent as DeletePet } from 'images/icons/trash-2.svg';
import avatarDefault2x from '../../../../images/profile_img/Photo_default_2x.jpg';

import { useState } from 'react';
import Modal from 'shared/components/Modal/Modal';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import {
  MyPetCard,
  PetImage,
  NameWrapper,
  SubTitle,
  InfoItem,
  PetComment,
  InfoText,
  TrashButton,
} from './PetsItem.styled';

const PetsItem = ({ pet, ava }) => {
  // name, birthday, breed, avatarURL, comments
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handlerClick = () => {
    //     dispatch(logOut())
    console.log('Delete');
  };

  return (
    <>
      <MyPetCard>
        <PetImage src={avatarDefault2x} alt="mypet's avatar" />
        <div>
          <NameWrapper>
            <InfoItem>
              <SubTitle>Name:&nbsp;</SubTitle>
              <InfoText>{pet.name}</InfoText>
            </InfoItem>
            <TrashButton onClick={() => setIsModalOpen(true)}>
              <DeletePet stroke="#54ADFF" width={24} height={24} />
            </TrashButton>
          </NameWrapper>
          <InfoItem>
            <SubTitle>Date of birth:&nbsp; </SubTitle>
            <InfoText>{pet.birthday}</InfoText>
          </InfoItem>
          <InfoItem>
            <SubTitle>Breed:&nbsp;</SubTitle>
            <InfoText> {pet.breed}</InfoText>
          </InfoItem>
          <InfoItem>
            <PetComment>
              Comments:&nbsp;
              <InfoText>{pet.comments}</InfoText>
            </PetComment>
          </InfoItem>
        </div>
      </MyPetCard>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <ModalApproveAction
            toggleModal={toggleModal}
            type="button"
            clickHandler={handlerClick}
            icon={<DeletePet stroke="#FEF9F9" fill="#54ADFF" />}
          >
            Delete information about {pet.name}?
          </ModalApproveAction>
        </Modal>
      )}
    </>
  );
};

export default PetsItem;
