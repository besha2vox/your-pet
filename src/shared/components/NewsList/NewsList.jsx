import NewsItem from '../NewsItem/NewsItem';
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
    <List>
      {isLoading && <NewsCardSkeleton cards={8} />}
      {!isLoading && items}
    </List>
  );
}
