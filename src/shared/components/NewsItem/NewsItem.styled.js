import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

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
  align-items: center;
  width: 100%;
  object-fit: cover;
  max-height: 252px;

  border-radius: 20px;
  overflow: hidden;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px 15px;
  row-gap: 16px;
  flex-grow: 1;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.38;
`;

export const NewsTitle = styled(EllipsisText)`
  margin-bottom: 15px;
  display: block;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 1.375;
  letter-spacing: -0.01em;
`;

export const NewsBody = styled(EllipsisText)`
  line-height: 1.375;
`;

export const BottomInfoWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const NewsDate = styled.p`
  color: #888888;
`;

export const NewsLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;

  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
