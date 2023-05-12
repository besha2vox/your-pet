import PropTypes from 'prop-types';
import { Wrapper } from './Section.styled';

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
