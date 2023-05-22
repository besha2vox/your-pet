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

export const Title = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.36;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const Card = styled.div`
  padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-right: ${({ theme }) => theme.space[2] * 2 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[2] * 6 + 'px'};
  padding-left: ${({ theme }) => theme.space[2] * 2 + 'px'};
  background: ${({ theme }) => theme.colors.classicWhite};
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

export const PetsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
  margin-right: ${({ theme }) => theme.space[0] + 'px'};
  margin-bottom: ${({ theme }) => theme.space[3] * 3 + 'px'};
  margin-left: ${({ theme }) => theme.space[0] + 'px'};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
    margin-right: ${({ theme }) => theme.space[0] + 'px'};
    margin-bottom: ${({ theme }) => theme.space[2] * 5 + 'px'};
    margin-left: ${({ theme }) => theme.space[0] + 'px'};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: ${({ theme }) => theme.space[2] * 15 + 'px'};
    margin-right: ${({ theme }) => theme.space[0] + 'px'};
    margin-bottom: ${({ theme }) => theme.space[3] * 3 + 'px'};
    margin-left: ${({ theme }) => theme.space[0] + 'px'};
  }
`;

export const AddPetButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 129px;
  height: 40px;
  padding: 9px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #fef9f9;
`;
