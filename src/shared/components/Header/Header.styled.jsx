import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: absolute;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  z-index: 4;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  padding-top: ${({ theme, user }) =>
    user ? theme.space[1] * 5 + 'px' : theme.space[1] * 6 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row-reverse;
    justify-content: space-between;

    width: 100%;
    margin-left: 160px;
  }
`;

const Menu = styled.div`
  right: ${({ screenWidth }) => {
    const breakepoint = screenWidth < 1280 && screenWidth >= 480 ? 768 : 480;
    const points = screenWidth / 2 - breakepoint / 2 + 98;

    return points + 'px';
  }};

  ${({ screenWidth }) =>
    screenWidth < 1280 &&
    'position: fixed; top: 50%; right: 50%; display: block; width: 0; height: 0; padding: 0; margin: 0; z-index: 9; overflow: hidden; box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3); background-color: #FDF7F2;  transition: border-radius 200ms 400ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 450ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1); border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%'};
  ${({ isOpen, screenWidth }) =>
    isOpen &&
    screenWidth < 1280 &&
    'border-radius: 0; top: 50%; right: 50%; transform: translate(50%, -50%); width: 100%; height: 100%; transition: border-radius 750ms 450ms cubic-bezier(0.23, 1, 0.32, 1), top 0ms 250ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 0ms 250ms ease, width 650ms 250ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 250ms cubic-bezier(0.23, 1, 0.32, 1);'};

  z-index: 4;

  @media screen and (max-width: 769px) {
    padding-top: ${({ theme }) => theme.space[1] * 41 + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export { HeaderWrapper, Wrapper, NavWrapper, Menu };
