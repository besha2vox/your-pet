import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;

  padding: ${({ theme }) => theme.space[6] + 'px'};
  padding-left: ${({ theme }) => theme.space[6] + 'px'};
  padding-right: ${({ theme }) => theme.space[6] + 'px'};
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 321px;
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export { Wrapper, Text };
