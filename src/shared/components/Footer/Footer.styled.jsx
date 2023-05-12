import styled from 'styled-components';

const FooterWrapper = styled.footer`
  min-width: 100vw;
  min-height: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 79px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 77px;
  }
`;

export { FooterWrapper };
