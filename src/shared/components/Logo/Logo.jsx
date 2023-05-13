import { useWindowSize } from 'hooks/useResize';
import { LogoIcon, LogoIconSm } from 'shared/utils/icons';
import { LogoWrapper } from './Logo.styled';

const Logo = () => {
  const [screenWidth] = useWindowSize();

  return (
    <LogoWrapper to="/main">
      {screenWidth <= 767 ? <LogoIconSm /> : <LogoIcon />}
    </LogoWrapper>
  );
};

export default Logo;
