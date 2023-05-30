import NoticesSearch from 'shared/components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'shared/components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'shared/components/NoticesFilters/NoticesFilters';
import AddPetBtn from 'shared/components/AddPetBtn/AddPetBtn';
import NoticesCategoriesList from 'shared/components/NoticesCategoriesList/NoticesCategoriesList';
import TeamList from 'shared/components/TeamList/TeamList';
import Pagination from 'shared/components/Pagination/Pagination';
import ModalNotice from 'shared/components/ModalNotice/ModalNotice';
import ModalUnAuthorized from 'shared/components/ModalUnAuthorized/ModalUnAuthorized';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import { useFetchNotices } from 'hooks/useFetchNotices';
import {
  getNoticeById,
  addFavoriteNotice,
  removeFavoriteNotice,
  removeNotice,
  removeFavoriteNoticeOnFavoritepage,
} from 'redux/notices/operations';
import { setCurrentNotice } from 'redux/notices/actions';
import { selectTotalHitsNotices } from 'redux/notices/selectors';
import { selectUser } from 'redux/auth/selectors';

import {
  Wrapper,
  Title,
  Container,
  Filters,
  ListContainer,
} from './NoticesPage.styled';
import { Slider } from 'shared/components/Slider/Slider';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const totalHits = useSelector(selectTotalHitsNotices);
  const { isLoggedIn } = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isAuthorizedModalOpen, setIsAuthorizedModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const { queryParams, methods } = useFetchNotices();
  const [page, teamFilter, genderFilter, ageFilter] = queryParams;
  const [setQuery, setGenderFilter, setAgeFilter, setTeamFilter, onPageChange] =
    methods;

  useEffect(() => {
    const pageCount = Math.ceil(totalHits / 12);

    setTotalPages(pageCount);
  }, [totalHits]);

  const onFormSubmit = query => {
    setQuery(query);
  };

  const toggleModal = () => {
    if (!isItemModalOpen) dispatch(setCurrentNotice());

    setIsItemModalOpen(prevState => !prevState);
  };

  const moreBtnClickHandler = async _id => {
    toggleModal();
    dispatch(getNoticeById(_id));
  };

  const toggleFavorites = pet => {
    if (!isLoggedIn) {
      toggleUnauthorizeModal();
      return;
    }

    if (pathname.includes('favorite')) {
      dispatch(removeFavoriteNoticeOnFavoritepage(pet));
      return;
    }

    if (pet.favorite.includes(user.id)) {
      dispatch(removeFavoriteNotice(pet));
      return;
    }

    dispatch(addFavoriteNotice(pet));
  };

  const onDeleteMyPet = _id => {
    dispatch(removeNotice(_id));
  };

  const toggleUnauthorizeModal = () => {
    setIsAuthorizedModalOpen(prevState => !prevState);
  };

  return (
    <Wrapper>
      <Title>Find your favorite pet</Title>
      <NoticesSearch onFormSubmit={onFormSubmit} />
      <Filters>
        <NoticesCategoriesNav isUser={isLoggedIn} />
        <Container>
          <NoticesFilters
            chooseGender={setGenderFilter}
            chooseAge={setAgeFilter}
            chooseKotikiFilter={setTeamFilter}
          />
          <AddPetBtn
            isFixed={true}
            text="Add pet"
            path="/add-pet"
            toggleUnauthorizeModal={toggleUnauthorizeModal}
          />
        </Container>
      </Filters>
      <ListContainer>
        {!teamFilter && (
          <NoticesCategoriesList
            moreBtnClickHandler={moreBtnClickHandler}
            toggleFavorites={toggleFavorites}
            onDeleteBtnClick={onDeleteMyPet}
            chosenAgeFilter={ageFilter}
            chosenGenderFilter={genderFilter}
            toggleUnauthorizeModal={toggleUnauthorizeModal}
          />
        )}
        {teamFilter && (
          <TeamList
            moreBtnClickHandler={moreBtnClickHandler}
            toggleFavorites={toggleFavorites}
            onDeleteBtnClick={onDeleteMyPet}
            chosenAgeFilter={ageFilter}
            chosenGenderFilter={genderFilter}
            toggleUnauthorizeModal={toggleUnauthorizeModal}
          />
        )}
        <Pagination
          onPageChange={onPageChange}
          currentPage={Number(page)}
          totalPagesCount={totalPages}
        />
      </ListContainer>
      {isItemModalOpen && (
        <ModalNotice
          toggleModal={toggleModal}
          onFavoriteClick={toggleFavorites}
        />
      )}
      {isAuthorizedModalOpen && (
        <ModalUnAuthorized toggleUnauthorizeModal={toggleUnauthorizeModal} />
      )}
      <Slider />
    </Wrapper>
  );
};

export default NoticesPage;
