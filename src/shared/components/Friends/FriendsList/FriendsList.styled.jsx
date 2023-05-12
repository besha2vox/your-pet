import styled from 'styled-components';

const FriendList = styled.ul`
  display: grid;

  gap: 12px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export { FriendList };
