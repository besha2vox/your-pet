import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Wrapper } from './Section.styled';

const Section = ({ children }) => {
  const location = useLocation();

  return <Wrapper location={location.pathname}>{children}</Wrapper>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
