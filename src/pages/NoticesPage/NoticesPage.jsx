import NoticesSearch from 'shared/components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'shared/components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'shared/components/NoticesFilters/NoticesFilters';
import AddPetBtn from 'shared/components/AddPetBtn/AddPetBtn';
import NoticesCategoriesList from 'shared/components/NoticesCategoriesList/NoticesCategoriesList';
import Pagination from 'shared/components/Pagination/Pagination';
import ModalNotice from 'shared/components/ModalNotice/ModalNotice';
import ModalUnAuthorized from 'shared/components/ModalUnAuthorized/ModalUnAuthorized';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import {
  getNotices,
  getNoticesByQuery,
  getUsersNotices,
  getFavoriteNotices,
  getNoticeById,
  addFavoriteNotice,
  removeFavoriteNotice,
  removeNotice,
} from 'redux/notices/operations';
import {
  selectNotices,
  selectTotalHitsNotices,
  selectCurrentNotice,
} from 'redux/notices/selectors';
import { selectUser } from 'redux/auth/selectors';

import {
  Wrapper,
  Title,
  Container,
  Filters,
  ListContainer,
} from './NoticesPage.styled';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const notices = useSelector(selectNotices);
  const totalHits = useSelector(selectTotalHitsNotices);
  const { isLoggedIn } = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const item = useSelector(selectCurrentNotice);
  const { pathname } = useLocation();
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isAuthorizedModalOpen, setIsAuthorizedModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || 1;

  useEffect(() => {
    if (categoryName === 'my-pets') {
      dispatch(getUsersNotices());
    } else if (categoryName === 'favorite') {
      dispatch(getFavoriteNotices());
    } else if (!query) {
      const searchQuery = {
        page,
      };

      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getNotices({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    } else {
      const searchQuery = {
        page,
        query,
      };

      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getNoticesByQuery({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    }
  }, [
    ageFilter,
    categoryName,
    dispatch,
    genderFilter,
    page,
    query,
    setSearchParams,
  ]);

  useEffect(() => {
    toggleModal();
  }, [item]);

  useEffect(() => {
    const pageCount = Math.ceil(totalHits / 12);

    setTotalPages(pageCount);
  }, [totalHits]);

  const onFormSubmit = query => {
    setQuery(query);
  };

  const toggleModal = () => {
    setIsItemModalOpen(prevState => !prevState);
  };

  const moreBtnClickHandler = async id => {
    dispatch(getNoticeById(id));
  };

  const toggleFavorites = pet => {
    if (!isLoggedIn) {
      toggleUnauthorizeModal();
      return;
    }

    if (pathname.includes('favorite') || pet.favorite.includes(user.id)) {
      dispatch(removeFavoriteNotice(pet));
      return;
    }

    dispatch(addFavoriteNotice(pet));
  };

  const onDeleteMyPet = _id => {
    dispatch(removeNotice(_id));
  };

  const onPageChange = currentPage => {
    if (page === currentPage) {
      return;
    }
    // const params = searchQuery
    //   ? { query: searchQuery, page: currentPage }
    //   : { page: currentPage };

    // setSearchParams(params);
  };

  const toggleUnauthorizeModal = () => {
    console.log(1);
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
          />
          <AddPetBtn
            text="Add pet"
            path="/add-pet"
            toggleUnauthorizeModal={toggleUnauthorizeModal}
          />
        </Container>
      </Filters>
      <ListContainer>
        <NoticesCategoriesList
          items={notices}
          moreBtnClickHandler={moreBtnClickHandler}
          toggleFavorites={toggleFavorites}
          onDeleteBtnClick={onDeleteMyPet}
          chosenAgeFilter={ageFilter}
          chosenGenderFilter={genderFilter}
          toggleUnauthorizeModal={toggleUnauthorizeModal}
        />
      </ListContainer>
      {notices && (
        <Pagination
          onPageChange={onPageChange}
          currentPage={Number(page)}
          totalPagesCount={totalPages}
        />
      )}
      {isItemModalOpen && (
        <ModalNotice
          toggleModal={toggleModal}
          onFavoriteClick={toggleFavorites}
        />
      )}
      {isAuthorizedModalOpen && (
        <ModalUnAuthorized toggleUnauthorizeModal={toggleUnauthorizeModal} />
      )}
    </Wrapper>
  );
};

export default NoticesPage;
