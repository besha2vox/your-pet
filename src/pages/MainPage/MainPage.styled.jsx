import styled from 'styled-components';

// імпорт фонових зображень
import bg_mobile1x from '../../images/bg_mobile1x.png';
import bg_mobile2x from '../../images/bg_mobile2x.png';
import bg_mobile3x from '../../images/bg_mobile3x.png';
import bg_teblet1x from '../../images/bg_tablet1x.png';
import bg_teblet2x from '../../images/bg_tablet2x.png';
import bg_teblet3x from '../../images/bg_tablet3x.png';
import bg_desctop1x from '../../images/bg_desctop1x.png';
import bg_desctop2x from '../../images/bg_desctop1x.png';
import bg_desctop3x from '../../images/bg_desctop1x.png';

// імпорт контентних зображень для мобілки
import mobile1_1x from '../../images/main_img/mobile/1mobile1x.webp';
import mobile1_2x from '../../images/main_img/mobile/1mobile2x.webp';
import mobile1_3x from '../../images/main_img/mobile/1mobile3x.webp';
import mobile2_1x from '../../images/main_img/mobile/2mobile1x.webp';
import mobile2_2x from '../../images/main_img/mobile/2mobile2x.webp';
import mobile2_3x from '../../images/main_img/mobile/2mobile3x.webp';
import mobile3_1x from '../../images/main_img/mobile/3mobile1x.webp';
import mobile3_2x from '../../images/main_img/mobile/3mobile2x.webp';
import mobile3_3x from '../../images/main_img/mobile/3mobile3x.webp';

// імпорт контактніх зображень для таблетки
import tablet1_1x from '../../images/main_img/tablet/1tablet1x.webp';
import tablet1_2x from '../../images/main_img/tablet/1tablet2x.webp';
import tablet1_3x from '../../images/main_img/tablet/1tablet3x.webp';
import tablet2_1x from '../../images/main_img/tablet/2tablet1x.webp';
import tablet2_2x from '../../images/main_img/tablet/2tablet2x.webp';
import tablet2_3x from '../../images/main_img/tablet/2tablet3x.webp';
import tablet3_1x from '../../images/main_img/tablet/3tablet1x.webp';
import tablet3_2x from '../../images/main_img/tablet/3tablet2x.webp';
import tablet3_3x from '../../images/main_img/tablet/3tablet3x.webp';

// шьпорт контактніх зображень для декстопу
import desctop1_1x from '../../images/main_img/desctop/1desctop1x.webp';
import desctop1_2x from '../../images/main_img/desctop/1desctop2x.webp';
import desctop1_3x from '../../images/main_img/desctop/1desctop3x.webp';
import desctop2_1x from '../../images/main_img/desctop/2desctop1x.webp';
import desctop2_2x from '../../images/main_img/desctop/2desctop2x.webp';
import desctop2_3x from '../../images/main_img/desctop/2desctop3x.webp';
import desctop3_1x from '../../images/main_img/desctop/3desctop1x.webp';
import desctop3_2x from '../../images/main_img/desctop/3desctop2x.webp';
import desctop3_3x from '../../images/main_img/desctop/3desctop3x.webp';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('${bg_mobile1x}');
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${bg_mobile2x}');
  }
  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${bg_mobile3x}');
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-image: url('${bg_teblet1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bg_teblet2x}');
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bg_teblet3x}');
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    background-image: url('${bg_desctop1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bg_desctop2x}');
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bg_desctop3x}');
    }
  }
`;

const MainTitle = styled.h1`
  max-width: 280px;
  height: 88px;
  margin-top: ${({ theme }) => theme.space[5] + 'px'};
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 1.38;
  color: #000000;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 588px;
    height: 200px;
    margin-top: ${({ theme }) => theme.space[6] + 16 + 'px'};
    font-size: ${({ theme }) => theme.fontSizes[8]};
    line-height: 1.47;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 501px;
    height: 264px;
    margin-top: ${({ theme }) => theme.space[6] + 111 + 'px'};
    font-family: ${({ theme }) => theme.fonts.main.extraBold};
    font-size: ${({ theme }) => theme.fontSizes[8]};
    line-height: 1.3;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: visible;
  margin: 30px auto 0;
  width: 320px;
  height: 390px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 820px;
    width: 768px;
    margin-top: 20px;
    margin-left: -30px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: 0;
    width: 917px;
    height: 570px;
    top: 180px;
  }
`;

const ImageOne = styled.img`
  position: absolute;
  width: 183px;
  height: auto;
  left: -60px;
  bottom: 55px;
  content: url('${mobile1_1x}');
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${mobile1_2x}');
  }
  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${mobile1_3x}');
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 380px;
    bottom: 112px;
    left: -45px;
    content: url('${tablet1_1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${tablet1_2x}');
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${tablet1_3x}');
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 380px;
    bottom: -25px;
    left: -140px;
    content: url('${desctop1_1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${desctop1_2x}');
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${desctop1_3x}');
    }
  }
`;

const ImageTwo = styled.img`
  position: absolute;
  width: 235px;
  height: auto;
  right: -45px;
  bottom: 131px;
  content: url('${mobile2_1x}');
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${mobile2_2x}');
  }
  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${mobile2_3x}');
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 280px;
    width: 490px;
    right: -74px;
    content: url('${tablet2_1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${tablet2_2x}');
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${tablet2_3x}');
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    bottom: 130px;
    right: 30px;
    width: 490px;
    content: url('${desctop2_1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${desctop2_2x}');
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${desctop2_3x}');
    }
  }
`;

const ImageThree = styled.img`
  position: absolute;
  width: 165px;
  height: auto;
  bottom: -5px;
  right: 1px;
  content: url('${mobile3_1x}');
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${mobile3_2x}');
  }
  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${mobile3_3x}');
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 12px;
    right: 12px;
    width: 332px;
    content: url('${tablet3_1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${tablet3_2x}');
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${tablet3_3x}');
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    bottom: -140px;
    right: 112px;
    width: 336px;
    content: url('${desctop3_1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${desctop3_2x}');
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${desctop3_3x}');
    }
  }
`;

export {
  MainContainer,
  MainTitle,
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageContainer,
};
