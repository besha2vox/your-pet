import NewsItem from '../NewsItem/NewsItem';
import NoItemsFound from '../NoItemsFound/NoItemsFound';
import NewsCardSkeleton from '../Skeleton/NewsCardSkeleton/NewsCardSkeleton';
import { useSelector } from 'react-redux';
import { selectNewsLoading } from 'redux/news/selectors';
import { nanoid } from 'nanoid';
import { List } from './NewsList.styled';

export default function NewsList({ data }) {
  const isLoading = useSelector(selectNewsLoading);
  const items = data?.map(({ title, url, date, imgUrl, text }) => (
    <NewsItem
      key={nanoid()}
      title={title}
      url={url}
      text={text}
      date={date}
      imgUrl={imgUrl}
    />
  ));

  return (
    <>
      {!data.length && !isLoading && (
        <NoItemsFound text="Nothing was found for your request." />
      )}
      {isLoading && (
        <List>
          <NewsCardSkeleton cards={3} />
        </List>
      )}
      {data.length > 0 && !isLoading && <List>{items}</List>}
    </>
  );
}
