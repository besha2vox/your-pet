import PropTypes from 'prop-types';
import Button from '../Button/Button';
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

const NoticesCategoriesList = ({ items, moreBtnClickHandler }) => {
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
            clickHandler={() => moreBtnClickHandler(pet)}
          />
        </CardFooter>
      </ListItem>
    );
  });
  return <List>{pets}</List>;
};

NoticesCategoriesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      sex: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      titleOfAdd: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
      favorite: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ),
  moreBtnClickHandler: PropTypes.func.isRequired,
};

export default NoticesCategoriesList;
