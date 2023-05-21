import styled from 'styled-components';

export const ErrorText = styled.p`
  position: absolute;
  bottom: -4px;
  left: 16px;

  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.red};
  transform: translateY(100%);
`;
