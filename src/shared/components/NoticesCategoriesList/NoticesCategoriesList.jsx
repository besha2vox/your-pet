import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { ageDeterminationFunc } from 'shared/helpers/ageDeterminationFunc';
import {
  HeartIcon,
  LocationIcon,
  ClockIcon,
  MaleIcon,
  FemaleIcon,
  PawPrintIcon,
  TrashIcon,
} from 'shared/utils/icons';

import {
  List,
  ListItem,
  ImageWrapper,
  Category,
  FavoriteBtn,
  DeleteBtn,
  InfoWrapper,
  Info,
  AgeInfo,
  GenderInfo,
  CardFooter,
  Comments,
} from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({
  items,
  moreBtnClickHandler,
  toggleFavorites,
  onDeleteBtnClick,
  chosenAgeFilter,
  chosenGenderFilter,
}) => {
  const user = useSelector(selectUser);
  const { pathname } = useLocation();

  if (!items) return;

  const pets = items.map(pet => {
    const age = ageDeterminationFunc(pet.birthday);
    const favorite = !pet.favorite || pet.favorite.includes(user.id);
    const title =
      pet.titleOfAdd.length >= 35
        ? pet.titleOfAdd.slice(0, 35) + ' ...'
        : pet.titleOfAdd;

    return (
      <ListItem key={pet._id}>
        <ImageWrapper bgi={pet.avatarURL}>
          <Category>{pet.category.split('-').join(' ')}</Category>
          <FavoriteBtn
            inFavorite={favorite}
            type="button"
            onClick={() => toggleFavorites(pet)}
            title={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <HeartIcon />
          </FavoriteBtn>
          {pathname.includes('my-pets') && (
            <DeleteBtn
              type="button"
              onClick={() => onDeleteBtnClick(pet._id)}
              title="Delete from my ads"
            >
              <TrashIcon />
            </DeleteBtn>
          )}
          <InfoWrapper>
            <Info>
              <LocationIcon />
              {pet.location}
            </Info>
            <AgeInfo inRange={chosenAgeFilter}>
              <ClockIcon />
              {age}
            </AgeInfo>
            <GenderInfo inRange={chosenGenderFilter}>
              {pet.sex === 'male' ? <MaleIcon /> : <FemaleIcon />}
              {pet.sex}
            </GenderInfo>
          </InfoWrapper>
        </ImageWrapper>
        <CardFooter>
          <Comments>{title}</Comments>
          <Button
            type="button"
            text="Learn more"
            icon={<PawPrintIcon />}
            clickHandler={() => moreBtnClickHandler(pet._id)}
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
      price: PropTypes.number,
      sex: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      titleOfAdd: PropTypes.string.isRequired,
      owner: PropTypes.shape,
      avatarURL: PropTypes.string.isRequired,
      favorite: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ),
  moreBtnClickHandler: PropTypes.func.isRequired,
};

export default NoticesCategoriesList;
