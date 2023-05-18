import styled from 'styled-components';

export const UserForm = styled.form`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 355px;
    margin: 0;
    padding: 0;
  }
`;
