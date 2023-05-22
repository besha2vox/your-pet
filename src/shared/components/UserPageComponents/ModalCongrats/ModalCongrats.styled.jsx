import styled from 'styled-components';

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.space[2] + 'px'};
  margin-right: ${({ theme }) => theme.space[0] + 'px'};
  margin-bottom: ${({ theme }) => theme.space[3] * 5 + 'px'};
  margin-left: ${({ theme }) => theme.space[0] + 'px'};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`;
