import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[3] * 3 + 'px'};

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${({ theme }) => theme.space[3] * 3 + 'px'};
    grid-template-rows: repeat(auto, 370px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ListItem = styled.li`
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  transition: box-shadow 300ms ${({ theme }) => theme.transition.main};

  &:nth-child(13) {
    grid-area: 1 / 2 / 2 / 1;
  }

  &:nth-child(9) {
    grid-area: 7 / 1 / 8 / 2;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-area: 4 /1 /5 / 2;
    }
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }
`;

const ImageWrapper = styled.div`
  position: relative;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
  background-image: url(${({ bgi }) => bgi});


  background-size: cover;

  max-width: 100%;
  min-height: 380px;
  height: 100%;
`;


const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  transition: background-color 300ms ${({ theme }) => theme.transition.main};
  & svg {
    fill: ${({ theme }) => theme.colors.blue};
    transition: stroke 300ms ${({ theme }) => theme.transition.main};
  }
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blue};
    & svg {
      fill: ${({ theme }) => theme.colors.lightBlue};
  }

 
`;

const SocialWrapper = styled.div`
  top: 12px;
  left: 12px;
  gap: 10px;
  display: flex;
  align-items: center;
`;

const Info = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2] + 'px'};

  min-width: 80px;
  padding: ${({ theme }) => `${theme.space[1]}px ${theme.space[3]}px`};

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 16px;

  & svg {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

const RoleInfo = styled(Info)`
  color: ${({ theme, inRange }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  padding: 10px;
  background-color: ${({ theme, inRange }) =>
    inRange ? theme.colors.blue : theme.colors.lightBlue};
  & svg {
    stroke: ${({ theme, inRange }) => theme.colors.blue};
  }
`;



const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[4] + 4 + 'px'};

  padding: ${({ theme }) => theme.space[4] + 4 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[3] * 3 + 'px'};

  border-radius: 0px 0px 40px 40px;
`;

const Name = styled.h3`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.black};

  overflow: hidden;
`;

export {
  List,
  ListItem,
  ImageWrapper,
  SocialLink,
  SocialWrapper,
  Info,
  RoleInfo,
  CardFooter,
  Name,
};
