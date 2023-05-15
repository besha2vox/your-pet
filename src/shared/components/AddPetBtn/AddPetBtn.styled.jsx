import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Btn = styled(Link)`
  position: fixed;
  top: 460px;
  right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2] + 'px'};

  width: 80px;
  height: 80px;
  padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[4] + 'px'};

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: #fff;

  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadows.main};

  transition: background-color 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    background-color: transparent;
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

  & svg {
    stroke: #fff;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    top: 0;
    right: 0;

    flex-direction: row;
    gap: 8px;

    width: 134px;
    height: 40px;
    padding-top: ${({ theme }) => theme.space[2] + 'px'};
    padding-bottom: ${({ theme }) => theme.space[2] + 'px'};
    padding-left: ${({ theme }) => theme.space[2] * 5 + 'px'};
    padding-right: ${({ theme }) => theme.space[2] * 5 + 'px'};

    font-family: ${({ theme }) => theme.fonts.main.bold};
    font-size: ${({ theme }) => theme.fontSizes[2]};

    border-radius: 40px;
  }
`;

export { Btn };
