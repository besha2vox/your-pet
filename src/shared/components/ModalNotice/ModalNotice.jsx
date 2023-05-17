import Button from '../Button/Button';
import { HeartIcon } from 'shared/utils/icons';
import { transformDate } from 'shared/helpers/transformDateFunc';
import { useWindowSize } from 'hooks/useResize';
import {
  Wrapper,
  Positioning,
  Image,
  InfoWrapper,
  Container,
  Title,
  Info,
  InfoName,
  InfoCred,
  CommentWrapper,
  Comment,
  BtnWrapper,
} from './ModalNotice.styled';
import { Category } from '../NoticesCategoriesList/NoticesCategoriesList.styled';

const ModalNotice = ({ item }) => {
  const [screenWidth] = useWindowSize();
  const addfavoritClickHandler = () => {};

  const contactClickHandler = () => {};

  const birthday = transformDate(item.birthday);

  return (
    <Wrapper>
      <Positioning>
        <Image bgi={item.avatarURL}>
          <Category>{item.category}</Category>
        </Image>

        <InfoWrapper>
          <Title>{item.titleOfAdd}</Title>
          <Container>
            <Info>
              <InfoName>Name:</InfoName>
              <InfoCred>{item.name}</InfoCred>
            </Info>
            <Info>
              <InfoName>Birthday:</InfoName>
              <InfoCred>{birthday}</InfoCred>
            </Info>
            <Info>
              <InfoName>Breed:</InfoName>
              <InfoCred>{item.breed}</InfoCred>
            </Info>
            <Info>
              <InfoName>Place:</InfoName>
              <InfoCred>{item.location}</InfoCred>
            </Info>
            <Info>
              <InfoName>The sex:</InfoName>
              <InfoCred>{item.sex}</InfoCred>
            </Info>
            <Info>
              <InfoName>Email:</InfoName>
              <InfoCred>{item.owner}</InfoCred>
            </Info>
            <Info>
              <InfoName>Phone:</InfoName>
              <InfoCred>{item.owner}</InfoCred>
            </Info>
          </Container>
        </InfoWrapper>
      </Positioning>

      <CommentWrapper>
        <InfoName>Comments: </InfoName>
        <Comment>{item.comments}</Comment>
      </CommentWrapper>

      <BtnWrapper>
        <Button
          text="Add to"
          type="button"
          clickHandler={addfavoritClickHandler}
          icon={<HeartIcon fill="#54ADFF" />}
          filled
          short={screenWidth >= 768}
          heart
        />
        <Button
          text="Contact"
          type="button"
          clickHandler={contactClickHandler}
          short={screenWidth >= 768}
        />
      </BtnWrapper>
    </Wrapper>
  );
};

export default ModalNotice;
