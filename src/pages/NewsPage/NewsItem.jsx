//import s from './newsItem.module.scss';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';

export default function NewsItem  ({ title, url,  date, imgUrl, text }) {
  
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

console.log(title);

  return (
    <li >

    <img src={imgUrl} width='100' alt={title}/> 
      <span ></span>
      <EllipsisText
       
        text={title}
        tooltip={title}
        length={Number(`${matches ? 50 : 35}`)}
      />
      <EllipsisText  text={text} length={230} />
      <div >
        <p >{zeroDate}</p>
        <a  href={url} target="_blank" rel="noreferrer">
          Read more
        </a>
      </div>
    </li>
  );
};



NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,


};