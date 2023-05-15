import NoticesSearch from 'shared/components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'shared/components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'shared/components/NoticesFilters/NoticesFilters';
import AddPetBtn from 'shared/components/AddPetBtn/AddPetBtn';
import { Wrapper, Title, Container, Filters } from './NoticesPage.styled';
import { useState } from 'react';

const NoticesPage = () => {
  const [user] = useState('Postman');
  const onFormSubmit = query => {};

  return (
    <Wrapper>
      <Title>Find your favorite pet</Title>
      <NoticesSearch onFormSubmit={onFormSubmit} />
      <Filters>
        <NoticesCategoriesNav user={user} />
        <Container>
          <NoticesFilters />
          <AddPetBtn text="Add pet" path="/add-pet" />
        </Container>
      </Filters>
    </Wrapper>
  );
};

export default NoticesPage;
