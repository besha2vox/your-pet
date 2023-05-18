import Button from '../../shared/components/Button/Button';
import React from 'react';
import {Image, ImageContainer, Title, BottomInfoWrapper, Span, MainContainer} from './NotFoundPage.styled';
import { Navigate } from 'react-router-dom';
import { PawPrintIcon } from 'shared/utils/icons';

function NotFoundPage() {
  return (
    <>
      <MainContainer>
        <Span>
        <Title>
        Ooops! This page not found :(
        </Title>
        </Span>
        <ImageContainer>
        <Image />
        </ImageContainer>
        <BottomInfoWrapper>
        <Button
          text ={"To main page"}
          icon={<PawPrintIcon fill="white" />}
          clickHandler={() => Navigate('/')}
        >
        </Button>
        </BottomInfoWrapper>
      </MainContainer>
    </>
  );
}

export default NotFoundPage;