import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3] + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.space[2] * 3 + 'px'};
  }
`;

const Btn = styled(NavLink)`
  position: relative;

  padding-top: ${({ theme }) => theme.space[3] + 'px'};
  padding-bottom: ${({ theme }) => theme.space[3] + 'px'};
  padding-left: ${({ theme }) => theme.space[4] + 'px'};
  padding-right: ${({ theme }) => theme.space[4] + 'px'};

  color: ${({ theme }) => theme.colors.blue};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 40px;

  transition: color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  &.active {
    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.blue};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.gradientBlue};
    border-radius: 40px;
    opacity: 0;

    z-index: -1;

    transition: opacity 300ms ${({ theme }) => theme.transition.main};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};

    background-color: transparent;
  }
`;

export { List, Btn };
