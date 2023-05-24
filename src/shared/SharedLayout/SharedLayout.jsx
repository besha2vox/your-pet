import Header from 'shared/components/Header/Header';
import Section from 'shared/components/Section/Section';
import Container from 'shared/components/Container/Container';
import Footer from 'shared/components/Footer/Footer';
import BtnScrollToTop from './../components/BtnScrollToTop/BtnScrollToTop';
import { useWindowSize } from 'hooks/useResize';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentWrapper, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  return (
    <>
      <ContentWrapper>
        <BtnScrollToTop />
        <Header />
        <Main screenHeight={screenHeight} screenWidth={screenWidth}>
          <Section>
            <Container>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </Container>
          </Section>
        </Main>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default SharedLayout;
