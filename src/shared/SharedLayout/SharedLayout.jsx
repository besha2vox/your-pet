import Header from 'shared/components/Header/Header';
import Section from 'shared/components/Section/Section';
import Container from 'shared/components/Container/Container';
import Footer from 'shared/components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentWrapper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <ContentWrapper>
        <Header />
        <main>
          <Section>
            <Container>
              <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
              </Suspense>
            </Container>
          </Section>
        </main>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default SharedLayout;
