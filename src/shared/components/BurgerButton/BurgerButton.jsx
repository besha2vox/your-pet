import { Spin as Hamburger } from 'hamburger-react';

const BurgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div style={{ marginLeft: 12, zIndex: 100 }}>
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
      </div>
    </>
  );
};

export default BurgerButton;
