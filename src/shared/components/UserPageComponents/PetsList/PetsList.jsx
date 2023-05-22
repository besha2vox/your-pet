import PropTypes from 'prop-types';
import PetsItem from '../PetsItem/PetsItem';

const PetsList = ({ pets }) => {
  return (
    <ul>
      {pets.map(pet => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </ul>
  );
};

export default PetsList;

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatarURL: PropTypes.string,
      name: PropTypes.string,
      breed: PropTypes.string,
      comments: PropTypes.string,
      birthday: PropTypes.string,
    })
  ),
};
