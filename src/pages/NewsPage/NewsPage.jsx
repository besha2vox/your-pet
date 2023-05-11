import NewsList from './NewsList';
import Container from 'shared/components/Container/Container';
import news from './news.json';
import Section from 'shared/components/Section/Section';
import {Title} from './NewsPage.styled';

const NewsPage = () => {
  //console.log(news);

  return (
    <Section>
      <Container>
        <Title> News</Title>
        <NewsList data={news} />;
      </Container>
    </Section>
  );
};

export default NewsPage;
