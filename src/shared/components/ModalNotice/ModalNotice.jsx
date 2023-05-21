import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentNotice } from 'redux/notices/selectors';
import { HeartIcon } from 'shared/utils/icons';
import { transformDate } from 'shared/helpers/transformDateFunc';
// import { useLocation } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';
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

const ModalNotice = ({ toggleModal, onFavoriteClick }) => {
  const [screenWidth] = useWindowSize();
  const item = useSelector(selectCurrentNotice);
  const user = useSelector(selectUser);
  // const { pathname } = useLocation();

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
                <InfoName>Owner:</InfoName>
                <InfoCred>{item.owner.username}</InfoCred>
              </Info>
              <Info>
                <InfoName>Email:</InfoName>
                <InfoCred>{item.owner.email}</InfoCred>
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
            text={
              !item.favorite || item.favorite.includes(user.id)
                ? 'Remove'
                : 'Add to'
            }
            type="button"
            clickHandler={() => onFavoriteClick(item)}
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
  toggleModal: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

export default ModalNotice;
