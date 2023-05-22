import PropTypes from 'prop-types';
import PetsList from '../PetsList/PetsList';
import AddPetBtn from 'shared/components/AddPetBtn/AddPetBtn';
import { PetsHeader, Title, NoPetsMessageWrapper } from './PetsData.styled';

const PetsData = ({ pets }) => {
  return (
    <>
      <PetsHeader>
        <Title>My pets:</Title>
        <AddPetBtn text="Add pet" path="/add-pet" isFixed={false} />
      </PetsHeader>
      {!pets.length && (
        <NoPetsMessageWrapper>
          <p>You haven't added any of your beloved pets yet.</p>
          <p>To add it, click on the 'Add pet' button above.</p>
        </NoPetsMessageWrapper>
      )}
      {!!pets.length && <PetsList pets={pets} />}
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
