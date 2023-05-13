import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2] * 3 + 'px'};

  padding: ${({ theme }) => theme.space[2] * 3 + 'px'} 0;

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.yellow};

  transition: color 350ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
  }

  & svg {
    stroke: ${({ theme }) => theme.colors.yellow};

    transition: stroke 350ms ${({ theme }) => theme.transition.main};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

export { Wrapper };
