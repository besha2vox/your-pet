import styled from 'styled-components';

export const MyPetCard = styled.li`
  padding: 20px 20px 40px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
`;

export const PetImage = styled.img`
  width: 240px;
  height: 240px;
  margin: 0 auto 20px;
  border-radius: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 128px;
    height: 128px;
  }
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: 600;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoItem = styled.div`
  display: flex;
  margin-bottom: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 16px;
  }
`;

export const InfoText = styled.span`
  display: inline;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
`;

export const PetComment = styled.p`
  display: inline;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: 600;
  }
`;
