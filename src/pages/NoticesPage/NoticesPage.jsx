import NoticesSearch from 'shared/components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'shared/components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'shared/components/NoticesFilters/NoticesFilters';
import AddPetBtn from 'shared/components/AddPetBtn/AddPetBtn';
import NoticesCategoriesList from 'shared/components/NoticesCategoriesList/NoticesCategoriesList';
import { Wrapper, Title, Container, Filters } from './NoticesPage.styled';
import { useState } from 'react';

const items = [
  {
    _id: '6461ef812e14b0d9d3578199',
    name: 'Dambo',
    birthday: '2018-10-14T21:00:00.000Z',
    breed: 'Elephant',
    location: 'Herson',
    price: 3000,
    sex: 'male',
    comments: 'Kind, intelligent. He likes bananas.',
    category: 'sell',
    titleOfAdd: 'Elephant',
    owner: '646097d25ebd4819ab3f4737',
    avatarURL:
      'https://res.cloudinary.com/dgei1ulzc/image/upload/v1684139905/uwuuzos85xuqk0o40frn.jpg',
    favorite: [],
  },
  {
    _id: '6461e448014843d2285ae0ab',
    name: 'Serhii',
    birthday: '1990-12-28T21:00:00.000Z',
    breed: 'human',
    location: "don't know",
    price: 1,
    sex: 'male',
    comments: 'qweqwrqrwqwttq',
    category: 'sell',
    titleOfAdd: 'qweqweqwe',
    owner: '6461dde97f0a5c35941e0012',
    avatarURL:
      'https://res.cloudinary.com/dgei1ulzc/image/upload/v1684137032/blgjqgd7hq0wm0rqqmi2.jpg',
    favorite: [],
  },
  {
    _id: '645fe58ce781dffd12939723',
    name: 'Роззі',
    birthday: '2022-04-02T21:00:00.000Z',
    breed: 'пітбуль',
    location: 'Київ',
    price: 5000,
    sex: 'female',
    comments: 'Самка пітбуля, 3 місяці. Добра та грайлива',
    category: 'sell',
    titleOfAdd: 'Молодий пітбуль',
    owner: '645f88639994886006f9a291',
    avatarURL:
      'https://res.cloudinary.com/dgei1ulzc/image/upload/v1684006282/gxctgdz8reqc57o4eizd.jpg',
    favorite: ['645fa41f80a47de14529a01d'],
  },
  {
    _id: '645fb54ac27aa4e1df1ab0c9',
    name: 'Sarah',
    birthday: '2022-04-02T21:00:00.000Z',
    breed: 'Siamesse cat',
    location: 'Kyiv',
    price: 250,
    sex: 'female',
    comments:
      'The British shorthair  are very mellow and easy going making them a wonderful addition to any family. ',
    category: 'sell',
    titleOfAdd: 'Funny cat with good habits',
    owner: '645fa41f80a47de14529a01d',
    avatarURL:
      'https://res.cloudinary.com/dgei1ulzc/image/upload/v1683993930/wkn0dickj5bet18imw53.jpg',
    favorite: [],
  },
];

const NoticesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user] = useState('Postman');
  const onFormSubmit = query => {};

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

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
      <div>
        <NoticesCategoriesList
          items={items}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
        />
      </div>
    </Wrapper>
  );
};

export default NoticesPage;
