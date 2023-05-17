import styled from 'styled-components';
export const Title = styled.h2`
margin-top: 71px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;

font-family: 'Manrope';
font-weight: 600;
@media (min-width: 768px){
  fontSize: 24px;
  lineHeight: 33px;
}

@media (min-width: 1280px) {
  lineHeight: 88px;
}

@media (min-width: 1280px) {
  fontSize: 68px;
  lineHeight: 100px;
}`;
export const Poster = styled.img`
margin-top: 80px;
height: 601px;
width: 100%;
background-image: url(${require('../../images/notFound/notFound-mobile@2x.png')});

@media (min-width: 768px) {
  height: 768px;
  background-image: url(${require('../../images/notFound/notFound-tablet@2x.png')});
}
@media (min-width: 1280px) {
  height: 1193px;
  background-image: url(${require('../../images/notFound/notFound-desktop@2x.png')});
}
`;
export const BottomInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`;
export const styledImg = {
      backgroundImage: {
        mobile: `url(${require('../../images/background/bg-mobile@2x.png')}), url(${require('../../images/notFound/notFound-mobile@2x.png')})`,
        tablet: `url(${require('../../images/background/bg-tablet@2x.png')}), url(${require('../../images/notFound/notFound-tablet@2x.png')})`,
        desktop: `url(${require('../../images/background/bg-desktop@2x.png')}), url(${require('../../images/notFound/notFound-desktop@2x.png')})`,
      },
  };