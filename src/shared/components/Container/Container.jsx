import PropTypes from 'prop-types';
import { Wrapper } from './Container.styled';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
