import styled from 'styled-components';
import { BaseSkeleton } from '../BaseSkeleton.styled';

const ListItem = styled.li`
  width: 288px;
  height: 456px;
  border-radius: 0px 0px 40px 40px;
  box-shadow: ${({ theme }) => theme.boxShadows.secondary};
`;

const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fbf0e7;
  background-position: center;
  background-size: cover;

  max-width: 100%;
  height: 288px;
`;

const Category = styled(BaseSkeleton)`
  position: absolute;
  top: 16px;
  left: 0;

  width: 126px;
  height: 32px;
  border-radius: 0px 16px 16px 0px;
`;

const FavoriteBtn = styled(BaseSkeleton)`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const DeleteBtn = styled(FavoriteBtn)`
  top: 68px;
  right: 12px;
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

const Info = styled(BaseSkeleton)`
  width: 80px;
  padding: ${({ theme }) => `${theme.space[1]}px ${theme.space[3]}px`};
  border-radius: 16px;
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

const Comments = styled(BaseSkeleton)`
  width: 252px;
  height: 63px;

  border-radius: 10px;
`;

const MoreBtn = styled(BaseSkeleton)`
  min-width: 252px;
  height: 42px;

  border-radius: 40px;
`;

export {
  ListItem,
  ImageWrapper,
  Category,
  FavoriteBtn,
  DeleteBtn,
  InfoWrapper,
  Info,
  CardFooter,
  Comments,
  MoreBtn,
};
