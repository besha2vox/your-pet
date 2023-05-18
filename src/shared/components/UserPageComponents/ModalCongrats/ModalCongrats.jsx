import { ReactComponent as Pawprint } from 'images/icons/pawprint.svg';
import {
  Section,
  Header,
} from '../ModalApproveAction/ModalApproveAction.styled';
import Button from 'shared/components/Button/Button';
import { Text } from './ModalCongrats.styled';
import PropTypes from 'prop-types';

const ModalCongrats = ({ toggleModal }) => {
  return (
    <Section>
      <Header style={{ margin: 0 }}>Congrats!</Header>
      <Text>Your registration is successful</Text>
      <Button
        type="button"
        text="Go to profile"
        filled
        clickHandler={toggleModal}
        icon={<Pawprint />}
      ></Button>
    </Section>
  );
};

export default ModalCongrats;

ModalCongrats.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};