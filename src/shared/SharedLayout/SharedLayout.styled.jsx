import styled from 'styled-components';

const ContentWrapper = styled.div`
  min-height: 100vh;
`;

const Main = styled.main`
  height: calc(${({ screenHeight }) => screenHeight} - 72px);
  padding-bottom: 103px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 192px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-bottom: 103px;
  }
`;

export { ContentWrapper, Main };
