
import { useSelector } from 'react-redux';
import { selectTeam } from 'redux/team/selectors';
import { TelegramIcon, GitIcon, LinkedInIcon } from 'shared/utils/icons';

import {
  List,
  ListItem,
  ImageWrapper,
  SocialLink,
  SocialWrapper,
  RoleInfo,
  CardFooter,
  Name,
} from './TeamList.styled';

const TeamList = () => {
  const team = useSelector(selectTeam);

  if (!team) return;

  const members = team.map(member => {
    return (
      <ListItem key={member._id}>
        <ImageWrapper bgi={member.avatarURL}>
                  </ImageWrapper>
        <CardFooter>
          <Name>{member.name}</Name>
          <RoleInfo>{member.comments}</RoleInfo>
          <SocialWrapper>
            <SocialLink href={member.gitURL} target="_blank" rel="noreferrer">
              <GitIcon />
            </SocialLink>
            <SocialLink
              href={member.linkedInURL}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </SocialLink>
            <SocialLink
              href={member.telegramURL}
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon />
            </SocialLink>
          </SocialWrapper>
        </CardFooter>
      </ListItem>
    );
  });
  return <List>{members}</List>;
};

export default TeamList;
