import styled from 'styled-components';

export const MainContent = styled.div`
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
  font-size: 20px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const Card = styled.div`
  padding: 20px 8px 25px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 704px;
    padding: 20px 76px 21px 20px;
    border-radius: 40px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 395px;
      height: 520px;
      padding: 20px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 395px;
      height: 520px;
      padding: 20px;
    }
  }
`;

export const PetsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin: 40px 0 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 40px 0 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 60px 0 24px;
  }
`;

export const AddPetButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 129px;
  height: 40px;
  padding: 9px;
  background: #54adff;
  border-radius: 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #fef9f9;
`;
