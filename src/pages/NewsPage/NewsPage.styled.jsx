import styled from 'styled-components';

export const Title = styled.h1`
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
    padding: 80px 0 0 0;
  }
`;