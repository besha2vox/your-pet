import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
import { PawPrintIcon } from 'shared/utils/icons';

import { ErrorMessage } from 'formik';
import {
  PersonalFormWrapper,
  AddFormLabel,
  AddFormInput,
} from './PersonalForm.styled';

import { validateField } from '../VaidatePet';

const PersonalForm = ({ formData, setFormData, nextStep, backStep }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({ name: 'error' });

  useEffect(() => {
    switch (formData.category) {
      case 'sell':
        setIsDisabled(
          Boolean(
            errors.name &&
              errors.birthday &&
              errors.breed &&
              errors.title &&
              errors.price
          )
        );
        break;

      case 'lost-found' || 'good-hands':
        setIsDisabled(
          Boolean(
            errors.name && errors.birthday && errors.breed && errors.title
          )
        );
        break;

      case 'your-pet':
        setIsDisabled(Boolean(errors.name && errors.birthday && errors.breed));
        break;

      default:
        setIsDisabled(true);
        break;
    }
  }, [errors, formData.category]);

  useEffect(() => {
    setIsDisabled(true);
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    const inputValue =
      name === 'birthday'
        ? new Date(value).toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : value;

    if (name === 'birthday') {
      console.log(inputValue, typeof inputValue);
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <PersonalFormWrapper>
      {formData.category !== 'your-pet' && (
        <AddFormLabel htmlFor="title">
          Title of add:
          <AddFormInput
            placeholder="Type title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            onBlur={() => validateField('title', formData, setErrors)}
          />
          <ErrorMessage name="title" component="div" />
        </AddFormLabel>
      )}
      <AddFormLabel htmlFor="name">
        Name:
        <AddFormInput
          placeholder="Type name pet"
          type="text"
          name="name"
          onChange={handleInputChange}
          value={formData.name}
          onBlur={() => validateField('name', formData, setErrors)}
        />
        <ErrorMessage name="name" component="div" />
      </AddFormLabel>
      <AddFormLabel htmlFor="birthday">
        Birthday:
        <AddFormInput
          placeholder="Type date of birth"
          type="date"
          name="birthday"
          data-pattern="**.**.****"
          onChange={handleInputChange}
          value={formData.birthday.split('.').reverse().join('-')}
          onBlur={() => validateField('birthday', formData, setErrors)}
        />
        <ErrorMessage name="birthday" component="div" />
      </AddFormLabel>
      <AddFormLabel htmlFor="breed">
        Breed:
        <AddFormInput
          placeholder="Type breed"
          type="text"
          name="breed"
          onChange={handleInputChange}
          value={formData.breed}
          onBlur={() => validateField('breed', formData, setErrors)}
        />
        <ErrorMessage name="breed" component="div" />
      </AddFormLabel>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          type="button"
          text="Next"
          icon={<PawPrintIcon />}
          clickHandler={nextStep}
          filled={false}
          isDisabled={isDisabled}
          // isDisabled={false}
        />
        <AddFormButtonBack
          type="button"
          clickHandler={backStep}
          text="Back"
          isLink={false}
        />
      </AddFormButtonWrapper>
    </PersonalFormWrapper>
  );
};

PersonalForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PersonalForm;
