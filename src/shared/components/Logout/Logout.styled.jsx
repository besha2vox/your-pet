import styled from 'styled-components';

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2] * 3 + 'px'};
  margin: 21px 0 0 2px;

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.35;
  background: transparent;
  border: none;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.grey};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 13px 0 0;
  }
`;
