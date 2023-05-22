import styled from 'styled-components';

export const MyPetCard = styled.li`
  padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-right: ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[3] * 5 + 'px'};
  padding-left: ${({ theme }) => theme.space[2] * 5 + 'px'};

  margin-bottom: ${({ theme }) => theme.space[2] * 5 + 'px'};

  background: ${({ theme }) => theme.colors.classicWhite};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: ${({ theme }) => theme.space[2] * 5 + 'px'};
    padding: ${({ theme }) => theme.space[2] * 5 + 'px'};
  }
`;

export const PetImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  margin-top: ${({ theme }) => theme.space[0] + 'px'};
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.space[2] * 5 + 'px'};
  margin-left: auto;

  border-radius: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 128px;
    height: 128px;

    margin: 0;
  }
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 1.36;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: 600;
  }
`;

export const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InfoItem = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.space[2] * 3 + 'px'};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.space[4] + 'px'};
  }
`;

export const InfoText = styled.span`
  display: inline;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 1.36;
  letter-spacing: 0.04em;
`;

export const PetComment = styled.p`
  display: inline;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 1.36;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: 600;
  }
`;
