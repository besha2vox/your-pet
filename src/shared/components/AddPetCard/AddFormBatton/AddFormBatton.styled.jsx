import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

const moveArrow = keyframes`
0% {
  transform: translateX(0);
}
15% {
  transform: translateX(15%);
}
60% {
  transform: translateX(-30%);
}
100% {
  transform: translateX(0);
}
`;

const buttonBack = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: ${({ theme }) => theme.space[2] * 2 + 'px'} 0;

  max-height: 40px;

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: 700;
  line-height: 1.38;

  color: ${({ theme }) => theme.colors.blue};
  background-color: transparent;
  border: none;

  transition: color 300ms ${({ theme }) => theme.transition.main};

  & svg {
    stroke: currentColor;
  }

  &:hover svg,
  &:focus svg {
    animation: ${moveArrow} 600ms linear infinite;
  }
`;

const buttonNext = css`
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.space[2] * 2 + 'px'} 0;
  gap: 12px;

  min-width: 248px;

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: 700;
  line-height: 1.38;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-width: ${({ filled }) => (filled ? 0 : '2px')};
  border-color: ${({ theme }) => theme.colors.blue};
  border-style: solid;
  border-radius: 40px;
  transition: color 300ms ${({ theme }) => theme.transition.main},
    border-color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};
  overflow: hidden;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradientBlue};
    opacity: 0;
    transition: opacity 300ms ${({ theme }) => theme.transition.main};
  }

  &:hover,
  &:focus {
    border-color: transparent;
    background-color: ${({ filled }) => filled && 'transparent'};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  & svg {
    fill: currentColor;
  }
`;

export const NextButton = styled.button`
  ${buttonNext}
`;

export const BackButton = styled.button`
  ${buttonBack}
`;

export const BackLink = styled(Link)`
  ${buttonBack}
`;
