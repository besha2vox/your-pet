import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  position: absolute;
  top: 210px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2] * 5 + 'px'};

  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 160px;
    left: 0;

    gap: ${({ theme }) => theme.space[2] * 15 + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: static;
    flex-direction: row;
    gap: ${({ theme }) => theme.space[3] * 5 + 'px'};
  }
`;

const Item = styled.li`
  @media screen and (max-width: 1279px) {
    position: relative;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 250ms linear;

    ${({ isOpen }) =>
      isOpen &&
      'visibility: visible; opacity: 1; transform: translateY(0); transition: opacity 350ms ease, transform 250ms ease;'}

    &:nth-child(1) {
      transition-delay: ${({ isOpen }) => (isOpen ? '620ms' : '180ms')};
    }

    &:nth-child(2) {
      transition-delay: ${({ isOpen }) => (isOpen ? '700ms' : '130ms')};
    }

    &:nth-child(3) {
      transition-delay: ${({ isOpen }) => (isOpen ? '780ms' : '80ms')};
    }
  }
`;

const Link = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.black};

  transition: color 350ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &.active {
    font-family: ${({ theme }) => theme.fonts.main.bold};
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-family: ${({ theme }) => theme.fonts.main.semiBold};
    font-size: ${({ theme }) => theme.fontSizes[7]};

    &.active {
      font-family: ${({ theme }) => theme.fonts.main.semiBold};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: ${({ theme }) => theme.space[1] * 5 + 'px'};
    padding-bottom: ${({ theme }) => theme.space[1] * 5 + 'px'};

    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export { List, Item, Link };
