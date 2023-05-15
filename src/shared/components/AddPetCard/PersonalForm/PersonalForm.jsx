import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import {
  PersonalFormWrapper,
  AddFormLabel,
  AddFormInput,
} from './PersonalForm.styled';

const PersonalForm = ({ category }) => {
  return (
    <PersonalFormWrapper>
      {category !== 'your-pet' && (
        <AddFormLabel htmlFor="title">
          Title of add:
          <AddFormInput placeholder="Type title" type="text" name="title" />
          <ErrorMessage name="title" component="div" />
        </AddFormLabel>
      )}
      <AddFormLabel htmlFor="name">
        Name:
        <AddFormInput placeholder="Type name pet" type="text" name="name" />
        <ErrorMessage name="name" component="div" />
      </AddFormLabel>
      <AddFormLabel htmlFor="birthday">
        Birthday:
        <AddFormInput
          placeholder="Type date of birth"
          type="text"
          name="birthday"
          data-pattern="**.**.****"
        />
        <ErrorMessage name="birthday" component="div" />
      </AddFormLabel>
      <AddFormLabel htmlFor="breed">
        Breed:
        <AddFormInput placeholder="Type breed" type="text" name="breed" />
        <ErrorMessage name="breed" component="div" />
      </AddFormLabel>
    </PersonalFormWrapper>
  );
};

PersonalForm.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PersonalForm;
