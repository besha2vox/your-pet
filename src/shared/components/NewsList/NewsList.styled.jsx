import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 44px;
  margin-top: 44px;
  align-items: center;
  flex-grow: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 46px;
    margin-top: 80px;
  }
`;
