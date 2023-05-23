import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import BurgerButton from '../BurgerButton/BurgerButton';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectAuth } from 'redux/auth/selectors';
import { useWindowSize } from 'hooks/useResize';
import { HeaderWrapper, Wrapper, NavWrapper, Menu } from './Header.styled';

const Header = () => {
  const user = useSelector(selectUser);
  const { isLoggedIn } = useSelector(selectAuth);
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth] = useWindowSize();

  const { username = '' } = user;

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper user={user}>
          <Logo />
          <NavWrapper>
            {isLoggedIn && (
              <UserNav userName={username} showName={screenWidth >= 768} />
            )}
            {screenWidth >= 768 && !isLoggedIn && <AuthNav />}
            {screenWidth <= 1279 && (
              <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            <Menu isOpen={isOpen} screenWidth={screenWidth} user={user}>
              {screenWidth <= 767 && isLoggedIn && (
                <UserNav userName={username} showName setIsOpen={setIsOpen} />
              )}
              {screenWidth < 768 && screenWidth <= 1279 && !isLoggedIn && (
                <AuthNav setIsOpen={setIsOpen} />
              )}
              <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
            </Menu>
          </NavWrapper>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
