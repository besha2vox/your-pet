import styled from 'styled-components';

export const Btn = styled.button`
  position: absolute;
  right: 0;
  translate: -20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    translate: -24px 0;
  }
`;
