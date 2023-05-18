import PropTypes from 'prop-types';
import { Spin as Hamburger } from 'hamburger-react';
import { Wrapper } from './BurgerButton.styled';

const BurgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <Wrapper>
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        rounded
        label="Show menu"
        size={24}
        color="#FFC107"
        distance="lg"
        duration={0.7}
      />
    </Wrapper>
  );
};

BurgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default BurgerButton;
