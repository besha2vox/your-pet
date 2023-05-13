import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.space[3] * 5 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.space[3] * 10 + 'px'};
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
  }
`;

export { Wrapper, Title };
