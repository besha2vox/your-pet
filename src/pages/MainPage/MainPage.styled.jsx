import styled from 'styled-components';

// імпорт контентних зображень для мобілки
import mobile1_1x from '../../images/main_img/mobile/mobile1x.png';
import mobile1_2x from '../../images/main_img/mobile/mobile2x.png';
import mobile1_3x from '../../images/main_img/mobile/mobile3x.png';

// імпорт контактніх зображень для таблетки
import tablet1_1x from '../../images/main_img/tablet/tablet1x.png';
import tablet1_2x from '../../images/main_img/tablet/tablet2x.png';
import tablet1_3x from '../../images/main_img/tablet/tablet3x.png';

// шьпорт контактніх зображень для декстопу
import desctop1_1x from '../../images/main_img/desctop/desctop1x.png';
import desctop1_2x from '../../images/main_img/desctop/desctop2x.png';
import desctop1_3x from '../../images/main_img/desctop/desctop3x.png';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-top: 108px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 148px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;

    padding-top: 256px;
  }
`;

const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 1.38;
  color: #000000;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 588px;
    font-size: ${({ theme }) => theme.fontSizes[8]};
    line-height: 1.47;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 501px;
    font-family: ${({ theme }) => theme.fonts.main.extraBold};
    font-size: ${({ theme }) => theme.fontSizes[8]};
    line-height: 1.3;
  }
`;

const Image = styled.img`
  position: absolute;
  right: -84px;
  top: calc(216px - 53px);

  width: 474px;
  height: auto;
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
    top: calc(375px - 110px);
    right: -148px;

    width: 985px;
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
    width: 967px;
    top: 0;
    right: -30px;
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

export { MainContainer, MainTitle, Image };
