import styled from 'styled-components';

const FriendItem = styled.li`
  padding: 16px 12px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 40px;

  &:hover,
  :focus {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 395px;
    transition: box-shadow 300ms ${({ theme }) => theme.transition.main};
  }
`;

const FriendLinkTitle = styled.a`
  display: block;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  transition: transform 350ms ${({ theme }) => theme.transition.main},
    color 350ms ${({ theme }) => theme.transition.main};

  :hover,
  :focus {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const FriendBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const FriendImgBox = styled.img`
  margin-right: 16px;
  max-width: 100px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 120px;
    margin-right: 14px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 158px;
    margin-right: 16px;
  }
`;

const FriendInfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

const TextWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: color 350ms ${({ theme }) => theme.transition.main};

  :not(:last-child) {
    margin-bottom: 12px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const WorkTime = styled.p`
  font: inherit;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 1.34;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: inherit;

  :focus {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 1.36;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.38;
  }
`;

const TextTitle = styled.p`
  display: flex;
  justify-content: space-between;
  font: inherit;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 1.34;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 1.36;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.38;
  }
`;

const Text = styled.p`
  display: flex;
  justify-content: space-between;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.34;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 1.36;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.38;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 1.34;

  :focus {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 1.36;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.38;
  }
`;

const WorkTimeList = styled.ul`
  padding: 12px;
  position: absolute;
  top: 36px;
  left: 0;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 40px;
    width: 120px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 48px;
    width: 120px;
  }
`;

const WorkTimeItem = styled.li`
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

const WorkTimeItemCurrent = styled.li`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;

  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

const WorkTimeText = styled.p`
  display: flex;
  justify-content: space-between;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: inherit;
  line-height: 1.34;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: 1.36;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: 1.38;
  }
`;

export {
  FriendItem,
  FriendLinkTitle,
  FriendBox,
  FriendImgBox,
  FriendInfoBox,
  WorkTime,
  TextTitle,
  Text,
  WorkTimeText,
  ContactLink,
  TextWrapper,
  WorkTimeList,
  WorkTimeItem,
  WorkTimeItemCurrent,
};
