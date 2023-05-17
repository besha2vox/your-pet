// import Container from '../../shared/components/Container/Container';
import {
  MainContainer,
  MainTitle,
  ImageContainer,
  ImageOne,
  ImageTwo,
  ImageThree,
} from './MainPage.styled';

const MainPage = () => {
  return (
    <MainContainer>
      <MainTitle>Take good care of your small pets</MainTitle>
      <ImageContainer>
      <ImageOne />
      <ImageTwo />
      <ImageThree />
      </ImageContainer>
    </MainContainer>
  );
};

export default MainPage;
