import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.space[6] + 24 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.space[6] * 2 + 16 + 'px'};
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2] * 3 + 'px'};
`;

const Filters = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 35px;

  margin-top: ${({ theme }) => theme.space[2] * 5 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.space[3] * 10 + 'px'};

    margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;

    width: 100%;
    margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
  }
`;

const ListContainer = styled.div`
  margin-top: ${({ theme }) => theme.space[3] * 3 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
  }
`;

export { Wrapper, Title, Container, Filters, ListContainer };
