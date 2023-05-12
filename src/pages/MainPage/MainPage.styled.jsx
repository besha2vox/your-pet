import styled from 'styled-components';

// імпорт фонових зображень
import bg_mobile from '../../images/bg_mobile-min.png';
import bg_teblet from '../../images/bg_tablet-min.png';
import bg_desctop from '../../images/bg_desctop-min.png';

// імпорт контентних зображень для мобілки
import mobile1 from '../../images/main_img/1_mobile.png';
import mobile2 from '../../images/main_img/2_mobile.png';
import mobile3 from '../../images/main_img/3_mobile.png';

// імпорт контактніх зображень для таблетки
import tablet1 from '../../images/main_img/1_tablet.png';
import tablet2 from '../../images/main_img/2_tablet.png';
import tablet3 from '../../images/main_img/3_tablet.png';

// шьпорт контактніх зображень для декстопу
import desctop1 from '../../images/main_img/1_desctop.png';
import desctop2 from '../../images/main_img/2_desctop.png';
import desctop3 from '../../images/main_img/3_desctop.png';

const MainContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 280px) {
    width: 320px;
    min-height: 601px;
    background-image: url('${bg_mobile}');
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    min-height: 1193px;
    background-image: url('${bg_teblet}');
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    min-height: 768px;
    background-image: url('${bg_desctop}');
  }

  @media screen and (min-width: 1600px) {
    width: 1600px;
    height: 950px;
  }
`;

const MainTitle = styled.h1`
  position: absolute;
  width: 280px;
  height: 88px;
  left: 20px;
  top: 108px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 588px;
    height: 200px;
    left: 32px;
    top: 148px;
    font-weight: 700;
    font-size: 68px;
    line-height: 100px;
  }

  @media screen and (min-width: 1280px) {
    width: 501px;
    height: 264px;
    left: 16px;
    top: 256px;
    font-weight: 800;
    font-size: 68px;
    line-height: 130%;
  }

  @media screen and (min-width: 1600px) {
    width: 600px;
    font-size: 75px;
  }
`;

const ImageOne = styled.img`
  position: absolute;
  line-height: 0;
  width: 117px;
  height: auto;
  left: 0;
  bottom: 8.5vh;
  content: url('${mobile1}');

  @media screen and (min-width: 768px) {
    width: 333px;
    bottom: 112px;
    content: url('${tablet1}');
  }

  @media screen and (min-width: 1280px) {
    width: 380px;
    bottom: 0;
    left: 365px;
    content: url('${desctop1}');
  }

  @media screen and (min-width: 1600px) {
    width: 400px;
    left: 550px;
  }
`;

const ImageTwo = styled.img`
  position: absolute;
  line-height: 0;
  width: 195px;
  height: auto;
  right: 0;
  bottom: 131px;
  content: url('${mobile2}');

  @media screen and (min-width: 768px) {
    bottom: 282px;
    width: 420px;
    content: url('${tablet2}');
  }

  @media screen and (min-width: 1280px) {
    bottom: 130px;
    right: 26px;
    width: 490px;
    content: url('${desctop2}');
  }

  @media screen and (min-width: 1600px) {
    width: 570px;
    right: 50px;
}
`;

const ImageThree = styled.img`
  position: absolute;
  line-height: 0;
  width: 165px;
  height: auto;
  bottom: 0;
  right: 3px;
  content: url('${mobile3}');

  @media screen and (min-width: 768px) {
    bottom: 12px;
    right: 12px;
    width: 337px;
    content: url('${tablet3}');
  }

  @media screen and (min-width: 1280px) {
    bottom: 0;
    right: 112px;
    width: 336px;
    content: url('${desctop3}');
  }

  @media screen and (min-width: 1600px) {
    width: 380px;
}
`;

export { MainContainer, MainTitle, ImageOne, ImageTwo, ImageThree };
