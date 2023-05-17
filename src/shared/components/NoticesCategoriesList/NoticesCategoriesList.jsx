import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ModalNotice from '../ModalNotice/ModalNotice';
import { ageDeterminationFunc } from 'shared/helpers/ageDeterminationFunc';
import {
  HeartIcon,
  LocationIcon,
  ClockIcon,
  MaleIcon,
  FemaleIcon,
  PawPrintIcon,
} from 'shared/utils/icons';

import {
  ListContainer,
  List,
  ListItem,
  ImageWrapper,
  Category,
  FavoriteBtn,
  InfoWrapper,
  Info,
  CardFooter,
  Comments,
} from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ items, toggleModal, isModalOpen }) => {
  const pets = items.map(pet => {
    const age = ageDeterminationFunc(pet.birthday);
    const title =
      pet.titleOfAdd.length >= 35
        ? pet.titleOfAdd.slice(0, 35) + ' ...'
        : pet.titleOfAdd;

    return (
      <ListItem key={pet._id}>
        <ImageWrapper bgi={pet.avatarURL}>
          <Category>{pet.category}</Category>
          <FavoriteBtn type="button">
            <HeartIcon />
          </FavoriteBtn>
          <InfoWrapper>
            <Info>
              <LocationIcon />
              {pet.location}
            </Info>
            <Info>
              <ClockIcon />
              {age}
            </Info>
            <Info>
              {pet.sex === 'male' ? <MaleIcon /> : <FemaleIcon />}
              {pet.sex}
            </Info>
          </InfoWrapper>
        </ImageWrapper>
        <CardFooter>
          <Comments>{title}</Comments>
          <Button
            type="button"
            text="Learn more"
            icon={<PawPrintIcon />}
            clickHandler={toggleModal}
          />
        </CardFooter>
        {isModalOpen && (
          <Modal toggleModal={toggleModal}>
            <ModalNotice item={pet} />
          </Modal>
        )}
      </ListItem>
    );
  });
  return (
    <ListContainer>
      <List>{pets}</List>
    </ListContainer>
  );
};

export default NoticesCategoriesList;
