import PropTypes from 'prop-types';
import { filters } from './filtersData';
import { List, Btn } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ isUser }) => {
  const items = filters.map(({ filter, path }, ind) => {
    if (!isUser && filter === 'favorite ads') {
      return null;
    }

    if (!isUser && filter === 'my ads') {
      return null;
    }

    return (
      <li key={ind}>
        <Btn to={`/notices/${path}`}>{filter}</Btn>
      </li>
    );
  });

  return <List>{items}</List>;
};

NoticesCategoriesNav.propTypes = {
  isUser: PropTypes.bool.isRequired,
};

export default NoticesCategoriesNav;
