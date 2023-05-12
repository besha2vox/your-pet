import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

// - кнопка без іконки з прозорим фоном, при ховері - синій градієнт, довжина 252px (248px):
// <Button text="Your text" clickHandler={YourClickHandler} />;
// пропси text та clickHandler є обов'язковими

// - кнопка з іконкою з прозорим фоном, при ховері - синій градієнт, довжина 252px (248px):
// <Button text="Your text" clickHandler={YourClickHandler} icon={<YourIcon/>} />;

// - кнопка з іконкою з синім фоном, при ховері - синій градієнт, довжина 252px (248px):
//<Button text="Your text" clickHandler={YourClickHandler} icon={<YourIcon />} filled />;

// - кнопка з іконкою з синім фоном, при ховері - синій градієнт, довжина 129px:
// <Button text="Your text" clickHandler={YourClickHandler} icon={<YourIcon />} filled short />;

// PROPS
// - text - обов'язковий - текст кнопки;
// - clickHandler - обов'язковий - обробляє подію 'click' на кнопці;
// - icon - не обов'язковий - отримує React Component, рендериться після тексту кнопки;
// - filled - не обов'язковий - робить фон кнопки синім у звичайному стані;
// - short - не обов'язковий - зменшує довжину кнопки з 252px до 129px;

const Button = ({ text, icon, clickHandler, filled, short }) => {
  return (
    <Btn
      onClick={clickHandler && (() => clickHandler(false))}
      filled={filled}
      short={short}
    >
      {text}
      {icon}
    </Btn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
