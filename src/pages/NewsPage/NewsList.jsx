import NewsItem from './NewsItem';
import {List} from './NewsList.styled';
import { nanoid } from 'nanoid';

export default function NewsList({ data }) {

  return (
    <>
      <List>
        {data?.map(({title, url,  date, imgUrl, text}) => (
          <NewsItem
            key={nanoid()}
            title={title}
            url={url}
            text={text}
            date={date}
            imgUrl={imgUrl}
          />
        ))}
      </List>
    </>
  );
}
