import styled from 'styled-components';

const FriendsPageTitle = styled.h2`
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes[4]};

  line-height: 1.375;

  margin: 0;

  padding: 40px 0 24px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    padding: 80px 0 40px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    padding: 80px 0 60px 0;
  }
`;

const NoFriendsOnPage = styled.p`
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 1.375;

  margin: 0;

  padding: 10px 0 10px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    padding: 20px 0 20px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) ) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    padding: 30px 0 30px 0;
  }
`;

export { FriendsPageTitle, NoFriendsOnPage };
