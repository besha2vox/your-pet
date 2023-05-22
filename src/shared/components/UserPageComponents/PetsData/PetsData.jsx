import PropTypes from 'prop-types';
import PetsList from '../PetsList/PetsList';

const PetsData = ({ pets }) => {
  return <PetsList pets={pets} />;
};

export default PetsData;

PetsData.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      avatarURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
      comments: PropTypes.string,
      birthday: PropTypes.string.isRequired,
    })
  ),
};
