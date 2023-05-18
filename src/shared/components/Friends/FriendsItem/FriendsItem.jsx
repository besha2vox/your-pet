import { useState } from 'react';

import {
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
} from './FriendsItem.styled';
import WorkTimePopup from './WorkTimePopup';
import defaultFriendImage from './../../../../images/friends/defaultFriendImage.png';

const dayNow = new Date();
const numberOfDay = dayNow.getDay();

export const FriendsItem = ({
  title,
  siteUrl,
  mapUrl,
  imageUrl = defaultFriendImage,
  adress,
  workDays,
  phone,
  email,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays =
    workDays &&
    workDays.map((day, index) => {
      return { day: week[index], ...day };
    });

  return (
    <FriendItem>
      <FriendLinkTitle
        href={siteUrl}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        {title}
      </FriendLinkTitle>
      <FriendBox>
        <FriendImgBox src={imageUrl ?? defaultFriendImage} alt={title} />
        <FriendInfoBox>
          <TextWrapper
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            onMouseLeave={() => {
              setIsVisible(true);
            }}
          >
            {workDays === null ||
            workDays === undefined ||
            workDays.length === 0 ? (
              <>
                <TextTitle>Time: </TextTitle>
                <Text>day and night</Text>
              </>
            ) : (
              <>
                {workDays[numberOfDay - 1]?.isOpen ? (
                  <>
                    <TextTitle>Time:</TextTitle>
                    <WorkTime>
                      {workDays[numberOfDay - 1].from}-
                      {workDays[numberOfDay - 1].to}
                    </WorkTime>
                  </>
                ) : (
                  <>
                    <TextTitle>Time:</TextTitle>
                    <WorkTime>Closed</WorkTime>
                  </>
                )}
                {isVisible || <WorkTimePopup shedule={newWorkDays} />}
              </>
            )}
          </TextWrapper>
          <TextWrapper>
            <TextTitle>Adress:</TextTitle>
            {mapUrl ? (
              <ContactLink href={mapUrl} target="_blank">
                {adress}
              </ContactLink>
            ) : (
              <Text>website only</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <TextTitle>Email:</TextTitle>
            {email ? (
              <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
            ) : (
              <Text>website only</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <TextTitle>Phone:</TextTitle>
            {phone ? (
              <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
            ) : (
              <Text>email only</Text>
            )}
          </TextWrapper>
        </FriendInfoBox>
      </FriendBox>
    </FriendItem>
  );
};
