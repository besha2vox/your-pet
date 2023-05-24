import Button from '../../shared/components/Button/Button';
import React from 'react';
import {
  Image,
  ImageContainer,
  Title,
  Paragraf,
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
        <Title>
          Ooops!
          <Paragraf> This page not found :(</Paragraf>
        </Title>
      </Span>
      <ImageContainer>
        <Image alt="not found" />
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
