import Container from 'shared/components/Container/Container';
import Button from '../../shared/components/Button/Button';
import React from 'react';
import {Poster, Title, BottomInfoWrapper} from './NotFoundPage.styled';
import { NavLink } from 'react-router-dom';
import { PawPrintIcon } from 'shared/utils/icons';

function NotFoundPage() {
  // const url= ('../../images/notFound/notFound-mobile@2x.png');
  // // ('../../images/notFound/notFound-tablet@2x.png'),
  // // ('../../images/notFound/notFound-desktop@2x.png');
  return (
    <>
      <Container >
        <Title>
         <h2>Ooops! This page not found :(</h2>
        </Title>
        <Poster src="./test.png" alt="not found"/>
        <BottomInfoWrapper>
        <Button
          text ={<NavLink to={'/'}>To main page</NavLink>}
          icon={<PawPrintIcon fill="white" />}
        >
          {/* <NavLink to={'/'}>To main page</NavLink> */}
        </Button>
        </BottomInfoWrapper>
      </Container>
    </>
  );
}

export default NotFoundPage;