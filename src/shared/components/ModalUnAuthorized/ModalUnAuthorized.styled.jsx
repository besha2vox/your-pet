import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;

  padding: ${({ theme }) => theme.space[6] + 'px'};
  padding-left: ${({ theme }) => theme.space[6] + 'px'};
  padding-right: ${({ theme }) => theme.space[6] + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 250px;
  }
`;

const Text = styled.p`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export { Wrapper, Text };
