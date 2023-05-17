import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: ${({ theme }) => theme.space[3] * 3 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
  }
`;

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
    column-gap: ${({ theme }) => theme.space[5] + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ListItem = styled.li`
  border-radius: 0px 0px 40px 40px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
`;

const ImageWrapper = styled.div`
  position: relative;

  background-image: url(${({ bgi }) => bgi});
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 288px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 288px;
  }
`;

const Category = styled.p`
  position: absolute;
  top: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 126px;
  max-height: 32px;
  padding: ${({ theme }) => theme.space[3] + 3 + 'px'} 0;

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: inherit;
  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0px 16px 16px 0px;
`;

const FavoriteBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 50%;

  &:hover svg,
  &:focus svg {
    fill: ${({ theme }) => theme.colors.blue};
  }

  & svg {
    stroke: ${({ theme }) => theme.colors.blue};

    transition: fill 300ms ease-in-out;
  }
`;

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom: ${({ theme }) => theme.space[2] * 3 + 'px'};
`;

const Info = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2] + 'px'};

  min-width: 80px;
  padding: ${({ theme }) => theme.space[1] + 'px'} 0;
  padding-right: ${({ theme }) => theme.space[1] + 'px'};
  padding-left: ${({ theme }) => theme.space[1] + 'px'};

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

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[4] + 4 + 'px'};

  padding: ${({ theme }) => theme.space[4] + 4 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[3] * 3 + 'px'};

  background-color: #fff;
  border-radius: 0px 0px 40px 40px;
`;

const Comments = styled.h3`
  width: 100%;
  height: 66px;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: left;

  overflow: hidden;
`;

export {
  ListContainer,
  List,
  ListItem,
  ImageWrapper,
  Category,
  FavoriteBtn,
  InfoWrapper,
  Info,
  CardFooter,
  Comments,
};
