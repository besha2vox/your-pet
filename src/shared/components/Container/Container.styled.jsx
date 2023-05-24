import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 ${({ theme }) => theme.space[2] * 5 + 'px'};
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.breakpoints.tablet};
    padding: 0 ${({ theme }) => theme.space[5] + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
    padding: 0 ${({ theme }) => theme.space[4] + 'px'};
  }
`;

export { Wrapper };
