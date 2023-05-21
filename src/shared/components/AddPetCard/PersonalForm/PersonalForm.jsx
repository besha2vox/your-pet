import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { PawPrintIcon } from 'shared/utils/icons';

import {
  PersonalFormWrapper,
  AddFormLabel,
  AddFormInput,
  AddFormLabelWrapper,
} from './PersonalForm.styled';

import { validateField } from '../vaidatePet';

const PersonalForm = ({ formData, setFormData, nextStep, backStep }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});

  const isNameFieldValid = Boolean(!errors.name && !!formData.name);
  const isBirthdayFieldValid = Boolean(!errors.birthday && !!formData.birthday);
  const isBreedFieldValid = Boolean(!errors.breed && !!formData.breed);
  const isTitleFieldValid = Boolean(!errors.title && !!formData.title);

  useEffect(() => {
    switch (formData.category) {
      case 'sell':
        setIsDisabled(
          !(
            isNameFieldValid &&
            isBirthdayFieldValid &&
            isBreedFieldValid &&
            isTitleFieldValid
          )
        );
        break;

      case 'lost-found' || 'for-free':
        setIsDisabled(
          !(
            isNameFieldValid &&
            isBirthdayFieldValid &&
            isBreedFieldValid &&
            isTitleFieldValid
          )
        );
        break;

      case 'my-pet':
        setIsDisabled(
          !(isNameFieldValid && isBirthdayFieldValid && isBreedFieldValid)
        );
        break;

      default:
        setIsDisabled(true);
        break;
    }
  }, [
    errors,
    formData.category,
    isBirthdayFieldValid,
    isBreedFieldValid,
    isNameFieldValid,
    isTitleFieldValid,
  ]);

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

    setFormData(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <PersonalFormWrapper>
      {formData.category !== 'my-pet' && (
        <AddFormLabelWrapper>
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
          </AddFormLabel>
          {!!errors.title && <ErrorMessage message={errors.title} />}
        </AddFormLabelWrapper>
      )}
      <AddFormLabelWrapper>
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
        </AddFormLabel>
        {!!errors.name && <ErrorMessage message={errors.name} />}
      </AddFormLabelWrapper>
      <AddFormLabelWrapper>
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
        </AddFormLabel>
        {!!errors.birthday && <ErrorMessage message={errors.birthday} />}
      </AddFormLabelWrapper>
      <AddFormLabelWrapper>
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
        </AddFormLabel>
        {!!errors.breed && <ErrorMessage message={errors.breed} />}
      </AddFormLabelWrapper>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          type="button"
          text="Next"
          icon={<PawPrintIcon />}
          clickHandler={nextStep}
          filled={false}
          isDisabled={isDisabled}
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
