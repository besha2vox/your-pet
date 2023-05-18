import styled from 'styled-components';

// імпорт фонових зображень
import bg_mobile from '../../images/background/bg-mobile@2x.png';
import bg_tablet from '../../images/background/bg-tablet@2x.png';
import bg_desctop from '../../images/background/bg-desktop@2x.png';

// імпорт контентних зображень
import mobile from '../../images/notFound/notFound-mobile@2x.png';
import tablet from '../../images/notFound/notFound-tablet@2x.png';
import desctop from '../../images/notFound/notFound-desktop@2x.png';

export const MainContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('${bg_mobile}');

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-image: url('${bg_tablet}');
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    background-image: url('${bg_desctop}');
  }
`;

export const Title = styled.h2`
  margin-top: 71px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  font-family: 'Manrope';
  font-weight: 600;
  @media (min-width: 768px) {
    fontsize: 24px;
    lineheight: 33px;
  }

  @media (min-width: 1280px) {
    lineheight: 88px;
  }

  @media (min-width: 1280px) {
    fontsize: 68px;
    lineheight: 100px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Image = styled.img`
  /* margin-top: 80px; */
  width: 100%;
  height: auto;
  content: url('${mobile}');

  @media (min-width: 768px) {
    content: url('${tablet}');
  }
  @media (min-width: 1280px) {
    content: url('${desctop}');
  }
`;
export const BottomInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`;

export const Span = styled.span``;
