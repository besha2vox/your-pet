import React from 'react';
import AddPetPageForm from '../../shared/components/AddPetCard/PetPageForm/PetPageForm';
import { AddFormWrapper } from './AddPetPage.styled';

const AddPetPage = () => {
  return (
    <AddFormWrapper>
      <AddPetPageForm />
    </AddFormWrapper>
  );
};

export default AddPetPage;
