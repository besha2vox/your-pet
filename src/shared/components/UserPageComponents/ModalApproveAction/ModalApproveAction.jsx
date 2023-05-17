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
