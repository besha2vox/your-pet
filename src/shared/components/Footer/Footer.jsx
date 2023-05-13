import PropTypes from 'prop-types';
import { FooterWrapper } from './Footer.styled';

const Footer = ({ children }) => {
  return <FooterWrapper>{children}</FooterWrapper>;
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
