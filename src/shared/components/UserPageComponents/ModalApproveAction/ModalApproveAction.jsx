import PropTypes from 'prop-types';
import Button from 'shared/components/Button/Button.jsx';
import { Section, BtnDiv, Header } from './ModalApproveAction.styled.jsx';

const ModalApproveAction = ({
  toggleModal,
  children,
  type,
  clickHandler,
  icon,
}) => {
  return (
    <Section>
      <Header>{children}</Header>
      <BtnDiv>
        <Button type={type} text="Cancel" clickHandler={toggleModal} short />
        <Button
          type={type}
          text="Yes"
          clickHandler={clickHandler}
          icon={icon}
          filled
          short
        />
      </BtnDiv>
    </Section>
  );
};

export default ModalApproveAction;

ModalApproveAction.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  icon: PropTypes.node,
};
