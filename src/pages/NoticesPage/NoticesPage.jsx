import NoticesSearch from 'shared/components/NoticesSearch/NoticesSearch';
import { Wrapper, Title } from './NoticesPage.styled';

const NoticesPage = () => {
  const onFormSubmit = query => {};

  return (
    <Wrapper>
      <Title>Find your favorite pet</Title>
      <NoticesSearch onFormSubmit={onFormSubmit} />
    </Wrapper>
  );
};

export default NoticesPage;
