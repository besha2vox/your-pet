import styled from 'styled-components';

const ContentWrapper = styled.div`
  position: relative;

  display: flex;

  width: 100%;
  min-height: 100vh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }

  &:after {
    content: '';
    display: block;
    min-height: 0;
  }
`;

export { ContentWrapper };
