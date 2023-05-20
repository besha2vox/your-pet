import styled from 'styled-components';

const AdTitle = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main.bold};
  margin-top: ${({ theme }) => theme.space[5] + 8 + 'px'};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.space[5] + 28 + 'px'};
    font-size: ${({ theme }) => theme.fontSizes[7]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[6]};
  }
`;

const AdList = styled.ul`
  display: flex;
  max-width: 100%;
  overflow: hidden;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4] + 4 + 'px'};
  margin-top: ${({ theme }) => theme.space[4] + 4 + 'px'};
  margin-bottom: ${({ theme }) => theme.space[4] + 'px'};
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    margin-bottom: ${({ theme }) => theme.space[0]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: ${({ theme }) => theme.space[4] + 14 + 'px'};
  }
`;

const AdItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3] + 2 + 'px'};
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  height: ${({ theme }) => theme.space[6] + 246 + 'px'};
  border-radius: 0px 0px 40px 40px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.space[6] + 160 + 'px'};
    margin-bottom: ${({ theme }) => theme.space[4] + 6 + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.space[6] + 161 + 'px'};
    height: ${({ theme }) => theme.space[6] + 226 + 'px'};
    margin-bottom: ${({ theme }) => theme.space[4] + 6 + 'px'};
  }
`;

const AdImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const AdText = styled.p`
  text-align: center;
  line-height: ${({ theme }) => theme.space[4] + 4 + 'px'};
  padding: ${({ theme }) => theme.space[3] + 2 + 'px'};
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  width: ${({ theme }) => theme.space[6] + 186 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    width: ${({ theme }) => theme.space[6] + 166 + 'px'};
    line-height: ${({ theme }) => theme.space[4] + 8 + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export { AdTitle, AdList, AdItem, AdImage, AdText };
