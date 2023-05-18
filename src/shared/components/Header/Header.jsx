import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import BurgerButton from '../BurgerButton/BurgerButton';
import { useState } from 'react';
import { useWindowSize } from 'hooks/useResize';
import { HeaderWrapper, Wrapper, NavWrapper, Menu } from './Header.styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useState('');
  const [screenWidth] = useWindowSize();

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper user={user}>
          <Logo />
          <NavWrapper>
            {user && <UserNav userName={user} showName={screenWidth >= 768} />}
            {screenWidth >= 768 && !user && <AuthNav />}
            {screenWidth <= 1279 && (
              <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            <Menu isOpen={isOpen} screenWidth={screenWidth} user={user}>
              {screenWidth <= 767 && user && (
                <UserNav userName={user} showName setIsOpen={setIsOpen} />
              )}
              {screenWidth < 768 && screenWidth <= 1279 && !user && (
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
