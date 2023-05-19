import styled from 'styled-components';

// імпорт фонових зображень
import bg_mobile1x from '../../../images/bg_mobile1x.png';
import bg_mobile2x from '../../../images/bg_mobile2x.png';
import bg_mobile3x from '../../../images/bg_mobile3x.png';
import bg_teb1x from '../../../images/bg_tablet1x.png';
import bg_teb2x from '../../../images/bg_tablet2x.png';
import bg_teb3x from '../../../images/bg_tablet3x.png';
import bg_desc1x from '../../../images/bg_desctop1x.png';
import bg_desc2x from '../../../images/bg_desctop2x.png';
import bg_desc3x from '../../../images/bg_desctop3x.png';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-grow: 1 0 auto;

  width: 100%;
  /* height: 100vh; */

  overflow: ${({ location }) => location === '/' && 'hidden'};

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ location }) => location === '/' && bg_mobile1x});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${({ location }) => location === '/' && bg_mobile2x});
  }
  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${({ location }) => location === '/' && bg_mobile3x});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-image: url(${({ location }) => location === '/' && bg_teb1x});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({ location }) => location === '/' && bg_teb2x});
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({ location }) => location === '/' && bg_teb3x});
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    background-image: url(${({ location }) => location === '/' && bg_desc1x});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({ location }) => location === '/' && bg_desc2x});
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({ location }) => location === '/' && bg_desc3x});
    }
  }
`;

export { Wrapper };
