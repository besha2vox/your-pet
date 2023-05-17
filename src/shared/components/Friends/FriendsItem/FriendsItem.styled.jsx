import styled from 'styled-components';

const FriendItem = styled.li`
  padding: 12px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 16px;
    border-radius: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 395px;
  }
`;

const FriendLinkTitle = styled.a`
  display: block;
  margin-bottom: 12px;
  font-weight: ${({ theme }) => theme.fonts.main.bold};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  transition: transform 350ms ${({ theme }) => theme.transition.main};

  :hover,
  :focus {
    transform: scale(1.1);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: 27px;
  }
`;

const FriendBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FriendImgBox = styled.img`
  margin-right: 12px;
  max-width: 110px;
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
  font-weight: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 16px;
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
    line-height: 19px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 22px;
  }
`;

const TextTitle = styled.p`
  display: flex;
  justify-content: space-between;
  font: inherit;
  font-weight: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 19px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 21px;
  }
`;

const Text = styled.p`
  display: flex;
  justify-content: space-between;
  font: inherit;
  font-weight: ${({ theme }) => theme.fonts.main.regular};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 19px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 21px;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 16px;

  :focus {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 19px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 22px;
  }
`;

const WorkTimeList = styled.ul`
  position: absolute;
  top: 48px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 8px;

  padding: 12px;

  color: ${({ theme }) => theme.colors.black};
`;

const WorkTimeItem = styled.li`
  :not(:last-child) {
    margin-bottom: 4px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 120px;
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
  ContactLink,
  TextWrapper,
  WorkTimeList,
  WorkTimeItem,
};
