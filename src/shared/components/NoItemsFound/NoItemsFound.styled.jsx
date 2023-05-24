import styled from 'styled-components';

const Text = styled.p`
  padding-top: ${({ theme }) => theme.space[5] + 'px'};

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;

  opacity: 0.3;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.space[6] + 'px'};

    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export { Text };
