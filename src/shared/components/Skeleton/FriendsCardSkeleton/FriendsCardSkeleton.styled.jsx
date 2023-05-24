import styled, { keyframes } from 'styled-components';
import { BaseSkeleton } from '../BaseSkeleton.styled';

const opacity = keyframes`
0%{
  opacity: 0.5;
}
50%{
  opacity: 1;
}
100%{
  opacity: 0.5;
}
`;

export const FriendItemSkeleton = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 12px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 395px;
    transition: box-shadow 300ms ${({ theme }) => theme.transition.main};
  }
`;

export const FriendTitleSkeketon = styled(BaseSkeleton)`
  display: block;
  margin: 0 auto;

  height: 27px;
  width: 80%;
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 40px;
  }
`;

export const FriendContentWrapperSkeleton = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 12px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 16px;
  }
`;

export const FriendImageWrapperSkeleton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: fit-content;

  background-color: #fbf0e7;

  & svg {
    animation: ${opacity} 1s ease infinite;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 120px;
    border-radius: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 158px;
  }
`;

export const FriendInfoListSkeleton = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 16px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 12px;
  }
`;

export const FriendInfoItemSkeleton = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const FriendInfoTitleSkeleton = styled(BaseSkeleton)`
  width: 40%;
  height: 16px;
  margin: 0;

  border-radius: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 22px;
  }
`;

export const FriendInfoTextSkeleton = styled(BaseSkeleton)`
  width: 90%;
  height: 16px;

  border-radius: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 22px;
  }
`;
