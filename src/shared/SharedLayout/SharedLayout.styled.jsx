import styled from 'styled-components';

const ContentWrapper = styled.div`
  min-height: 100vh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: calc(100vh - 79px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: calc(100vh - 77px);
  }

  &:after {
    content: '';
    display: block;
    min-height: 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      min-height: 79px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      min-height: 77px;
    }
  }
`;

export { ContentWrapper };
