import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/auth/operations';
import { useState } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { ReactComponent as DeletePet } from 'images/icons/trash-2.svg';
import avatarDefault2x from '../../../../images/profile_img/Photo_default_2x.jpg';
import Modal from 'shared/components/Modal/Modal';
import IconButton from '../IconButton/IconButton';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import {
  MyPetCard,
  PetImage,
  NameWrapper,
  SubTitle,
  InfoItem,
  PetComment,
  InfoText,
} from './PetsItem.styled';

const PetsItem = ({ pet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handlerClick = () => {
    setIsModalOpen(true);
  };

  const handlerDeleteClick = () => {
    setIsModalOpen(false);
    dispatch(deletePet(pet._id))
      .then(() => {
        setIsDeleted(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const birthday = new Date(pet.birthday);
  const formattedBirthdayDate = format(birthday, 'dd.MM.yyyy');

  return (
    <>
      {!isDeleted && (
        <MyPetCard>
          <PetImage
            src={pet.avatarURL || avatarDefault2x}
            alt="mypet's avatar"
          />
          <div>
            <NameWrapper>
              <InfoItem>
                <SubTitle>Name:&nbsp;</SubTitle>
                <InfoText>{pet.name}</InfoText>
              </InfoItem>
              <IconButton
                type="button"
                clickHandler={handlerClick}
                icon={<DeletePet stroke="#54ADFF" />}
              ></IconButton>
            </NameWrapper>
            <InfoItem>
              <SubTitle>Date of birth:&nbsp; </SubTitle>
              <InfoText>{formattedBirthdayDate}</InfoText>
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
      )}
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <ModalApproveAction
            toggleModal={toggleModal}
            type="button"
            clickHandler={handlerDeleteClick}
            icon={<DeletePet stroke="#FEF9F9" style={{ fill: '#54ADFF' }} />}
          >
            Delete information about {pet.name}?
          </ModalApproveAction>
        </Modal>
      )}
    </>
  );
};

export default PetsItem;

PetsItem.propTypes = {
  pet: PropTypes.shape({
    avatarURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    comments: PropTypes.string,
    birthday: PropTypes.string.isRequired,
  }),
};
