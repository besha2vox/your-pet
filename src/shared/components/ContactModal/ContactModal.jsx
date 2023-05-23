import Modal from '../Modal/Modal';
import { Wrapper, Text, ContactsWrapper, Contact } from './ContactModal.styled';

const ContactModal = ({ toggleContactModal, owner }) => {
  return (
    <Modal toggleModal={toggleContactModal}>
      <Wrapper>
        {!owner.email && !owner.phone && (
          <Text>
            You cannot contact the owner because he has not provided his contact
            details.
          </Text>
        )}
        {!owner.email && owner.phone && (
          <Text>
            Contact with {owner.username ? owner.username : 'owner'} by phone:
          </Text>
        )}
        {owner.email && !owner.phone && (
          <Text>
            Contact with {owner.username ? owner.username : 'owner'} by email:
          </Text>
        )}

        {owner.email && owner.phone && (
          <Text>
            Contact with {owner.username ? owner.username : 'owner'} by phone or
            email:
          </Text>
        )}
        <ContactsWrapper>
          {owner.phone && <Contact href={`tel:${owner.phone}`}>Call</Contact>}
          {owner.email && (
            <Contact href={`mailto:${owner.email}`}>Message</Contact>
          )}
        </ContactsWrapper>
      </Wrapper>
    </Modal>
  );
};

export default ContactModal;
