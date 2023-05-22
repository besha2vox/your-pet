import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ContactModal from '../ContactModal/ContactModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentNotice } from 'redux/notices/selectors';
import { HeartIcon } from 'shared/utils/icons';
import { transformDate } from 'shared/helpers/transformDateFunc';
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
  Contact,
} from './ModalNotice.styled';
import { Category } from '../NoticesCategoriesList/NoticesCategoriesList.styled';

const ModalNotice = ({ toggleModal, onFavoriteClick }) => {
  const [screenWidth] = useWindowSize();
  const item = useSelector(selectCurrentNotice);
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log('isModalOpen: ', isModalOpen);

  if (!item) return;

  const onFavoriteBtnClick = () => {
    onFavoriteClick(item);
    toggleModal();
  };

  const toggleContactModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const contactClickHandler = () => {
    toggleContactModal();
  };

  const birthday = transformDate(item.birthday);

  return (
    <>
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
                  <InfoCred>
                    {!item.owner.username ? 'Stranger' : item.owner.username}
                  </InfoCred>
                </Info>
                <Info>
                  <InfoName>Email:</InfoName>
                  <Contact
                    href={`mailto:${item.owner.email}`}
                    disabled={!item.owner.email}
                  >
                    {!item.owner.email ? 'unknown' : item.owner.email}
                  </Contact>
                </Info>
                <Info>
                  <InfoName>Phone:</InfoName>
                  <Contact
                    href={`tel:${item.owner.phone}`}
                    disabled={!item.owner.phone}
                  >
                    {item.owner.phone ? item.owner.phone : 'unknown'}
                  </Contact>
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
              clickHandler={onFavoriteBtnClick}
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
      {isModalOpen && (
        <ContactModal
          toggleContactModal={toggleContactModal}
          owner={item.owner}
        />
      )}
    </>
  );
};

ModalNotice.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

export default ModalNotice;
