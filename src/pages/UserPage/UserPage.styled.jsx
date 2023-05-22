import styled from 'styled-components';

export const MainContent = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    gap: 32px;
  }
`;

export const TitleWrap = styled.div`
  margin: 40px 0 18px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 60px 0 24px;
  }
`;

export const Card = styled.div`
  padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-right: ${({ theme }) => theme.space[2] * 2 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[2] * 6 + 'px'};
  padding-left: ${({ theme }) => theme.space[2] * 2 + 'px'};
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 704px;
    padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
    padding-right: 76px;
    padding-bottom: ${({ theme }) => theme.space[2] * 5 + 'px'};
    padding-left: ${({ theme }) => theme.space[2] * 5 + 'px'};
    border-radius: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 395px;
    height: 520px;
    padding: ${({ theme }) => theme.space[2] * 5 + 'px'};
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.36;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;
