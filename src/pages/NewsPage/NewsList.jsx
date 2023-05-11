import NewsItem from './NewsItem';
//import s from './newsList.module.scss';
import { nanoid } from 'nanoid';

export default function NewsList({ data }) {

console.log(data);

  return (
    <>
      <ul>
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
      </ul>
    </>
  );
}
