import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import {
  Item,
  NewsBody,
  NewsTitle,
  TextContent,
  BottomInfoWrapper,
  NewsDate,
  NewsLink,
  ImageWrapper,
} from './NewsItem.styled';

export default function NewsItem({ title, url, date, imgUrl, text }) {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1280px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(min-width: 1280px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const formatDate = format(new Date(date), 'dd/MM/yyyy');
  const zeroDate = formatDate === '01/01/1970' ? '' : formatDate;

  return (
    <Item>
      <ImageWrapper>
        <img src={imgUrl} alt={title} />
      </ImageWrapper>
      <TextContent>
        <NewsTitle
          text={title}
          tooltip={title}
          length={Number(`${matches ? 50 : 35}`)}
        />
        <NewsBody text={text} length={230} />

        <BottomInfoWrapper>
          <NewsDate>{zeroDate}</NewsDate>
          <NewsLink href={url} target="_blank" rel="noreferrer">
            Read more
          </NewsLink>
        </BottomInfoWrapper>
      </TextContent>
    </Item>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
