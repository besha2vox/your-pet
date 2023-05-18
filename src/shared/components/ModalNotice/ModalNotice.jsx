import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
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

const ModalNotice = ({ item, toggleModal }) => {
  const [screenWidth] = useWindowSize();
  const addfavoritClickHandler = () => {};

  const contactClickHandler = () => {};

  if (!item) return;

  const birthday = transformDate(item.birthday);

  return (
    <Modal toggleModal={toggleModal}>
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
    </Modal>
  );
};

ModalNotice.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    titleOfAdd: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
    favorite: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  toggleModal: PropTypes.func.isRequired,
};

export default ModalNotice;
