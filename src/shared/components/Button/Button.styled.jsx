import styled from 'styled-components';

const Btn = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme, short }) =>
    short ? theme.space[2] * 2 + 'px' : theme.space[2] * 3 + 'px'};

  min-width: ${({ short }) => (short ? '129px' : '252px')};
  max-height: 40px;
  padding: ${({ theme }) => theme.space[2] * 2 + 'px'} 0;

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme, filled }) =>
    filled ? theme.colors.white : theme.colors.blue};

  background-color: ${({ theme, filled }) =>
    filled ? theme.colors.blue : 'transparent'};
  border-width: ${({ filled }) => (filled ? 0 : '2px')};
  border-color: ${({ theme }) => theme.colors.blue};
  border-style: solid;
  border-radius: 40px;

  z-index: 2;

  transition: color 300ms ${({ theme }) => theme.transition.main},
    border-color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border-color: transparent;
    background-color: ${({ filled }) => filled && 'transparent'};
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
    fill: ${({ theme, filled, heart }) =>
      filled && !heart ? theme.colors.white : theme.colors.blue};

    stroke: ${({ theme, heart }) => heart && theme.colors.white};

    transition: fill 300ms ${({ theme }) => theme.transition.main};
  }

  &:hover svg,
  &:focus svg {
    fill: ${({ theme, heart }) => !heart && theme.colors.white};
  }
`;

export { Btn };
