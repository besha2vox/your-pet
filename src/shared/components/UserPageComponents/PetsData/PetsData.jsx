import PropTypes from 'prop-types';
import PetsList from '../PetsList/PetsList';
import AddPetBtn from 'shared/components/AddPetBtn/AddPetBtn';
import { PetsHeader, Title } from 'pages/UserPage/UserPage.styled';

const PetsData = ({ pets }) => {
  return (
    <>
      <PetsHeader>
        <Title>My pets:</Title>
        <AddPetBtn
          text="Add pet"
          path="/add-pet"
          // isFixed={false}
        />
      </PetsHeader>
      <PetsList pets={pets} />;
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
