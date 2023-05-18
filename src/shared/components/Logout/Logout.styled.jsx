import styled from 'styled-components';

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 21px 0 0 2px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  background: transparent;
  border: none;
  letter-spacing: 0.04em;
  color: #888888;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 13px 0 0;
  }
`;
