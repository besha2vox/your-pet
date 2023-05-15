import { List, Btn } from './NoticesCategoriesNav.styled';

const filters = [
  'sell',
  'lost/found',
  'in good hands',
  'favorite ads',
  'my ads',
];

const NoticesCategoriesNav = ({ user }) => {
  const items = filters.map((filter, ind) => {
    if (!user && filter === 'favorite ads') {
      return null;
    }

    if (!user && filter === 'my ads') {
      return null;
    }

    return (
      <li key={ind}>
        <Btn>{filter}</Btn>
      </li>
    );
  });

  return <List>{items}</List>;
};

export default NoticesCategoriesNav;
