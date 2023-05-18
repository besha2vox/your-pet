import PetsList from '../PetsList/PetsList';
import AddPetBtn from 'shared/components/AddPetBtn/AddPetBtn';
import { MyPetCard } from './PetsData.styled';
import PropTypes from 'prop-types';

const PetsData = ({ pets }) => {
  return (
    <>
      <MyPetCard>
        <AddPetBtn text="Add pet" path="/add-pet" />
      </MyPetCard>
      <PetsList pets={pets} />
    </>
  );
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