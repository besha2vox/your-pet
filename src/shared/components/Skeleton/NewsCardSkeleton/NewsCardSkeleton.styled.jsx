import styled from 'styled-components';
import { BaseSkeleton } from '../BaseSkeleton.styled';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;

  background: #ffffff;
  transition: box-shadow 300ms ${({ theme }) => theme.transition.main};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }

  &::before {
    content: '';
    position: absolute;
    top: -14px;
    left: 0;
    width: 100%;
    height: 4px;
    width: 100%;

    transform: translateY(-100%);
    border-radius: 40px;
    background-image: ${({ theme }) => theme.colors.gradientBlue};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc((100% - 32px) / 2);

    &::before {
      height: 8px;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: calc((100% - 32px * 2) / 3);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 280px;
  height: 252px;

  background-color: #fbf0e7;
  border-radius: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 336px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 395px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 16px 12px 15px;
  row-gap: 16px;
  flex-grow: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 336px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 395px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 17px;
`;

export const NewsTitle = styled(BaseSkeleton)`
  width: 90%;
  height: 30px;
  margin: 0 auto;

  border-radius: 8px;

  &:not(:first-child) {
    margin-top: 5px;
  }
`;

export const NewsBody = styled(BaseSkeleton)`
  width: 100%;

  border-radius: 8px;

  &:not(:first-child) {
    margin-top: 4px;
  }
`;

export const BottomInfoWrapper = styled.div`
  margin-top: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewsDate = styled(BaseSkeleton)`
  width: 88px;
  height: 22px;

  border-radius: 8px;
`;

export const NewsLink = styled(NewsDate)``;
