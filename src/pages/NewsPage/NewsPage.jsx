import NewsList from './NewsList';
import Container from 'shared/components/Container/Container';
import news from './news.json';
import Section from 'shared/components/Section/Section';
//import Section from 'shared/components/Section/Section';

const NewsPage = () => {
  //console.log(news);

  return (
<Container>
  
<Section>
<NewsList data={news} />;
</Section>


</Container>


  )
  
  
};

export default NewsPage;
