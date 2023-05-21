import styled from 'styled-components';

export const UserForm = styled.form`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 355px;
    margin: ${({theme}) => theme.space[0]};
    padding: ${({theme}) => theme.space[0]};
  }
`;
