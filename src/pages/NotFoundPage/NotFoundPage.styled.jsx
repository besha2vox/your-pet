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
  margin-top: 80px;
  display: block;
  align-items: center;
  justify-content: center;

font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
text-align: center;

@media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
  }

@media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const Paragraf = styled.h2`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
text-align: center;

@media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
    margin-left: 10px;
  }

@media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Image = styled.img`
  width: 280px;
  height: 123px;
  content: url('${mobile}');

  @media (min-width: 768px) {
    content: url('${tablet}');
    width: 704px;
    height: 308px;
  }
  @media (min-width: 1280px) {
    content: url('${desctop}');
    width: 822px;
    height: 360px;
  }
`;

export const BottomInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    margin-top: 68px;
  }
  @media (min-width: 1280px) {
    margin-top: 18px;
  }
`;

export const Span = styled.span``;
