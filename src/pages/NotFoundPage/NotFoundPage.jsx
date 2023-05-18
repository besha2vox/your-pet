import Button from '../../shared/components/Button/Button';
import React from 'react';
import {
  Image,
  ImageContainer,
  Title,
  BottomInfoWrapper,
  Span,
  MainContainer,
} from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';
import { PawPrintIcon } from 'shared/utils/icons';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Span>
        <Title>Ooops! This page not found :(</Title>
      </Span>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <BottomInfoWrapper>
        <Button
          type="button"
          text={'To main page'}
          icon={<PawPrintIcon fill="white" />}
          clickHandler={() => navigate('/')}
        ></Button>
      </BottomInfoWrapper>
    </MainContainer>
  );
}

export default NotFoundPage;
