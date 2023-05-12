import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2] * 3 + 'px'};

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.space[2] * 5 + 'px'};
  }
`;

export { List };
