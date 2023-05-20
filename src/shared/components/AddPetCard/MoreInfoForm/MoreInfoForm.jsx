import { ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';

import {
  PlusIcon,
  MaleIcon,
  FemaleIcon,
  PawPrintIcon,
} from 'shared/utils/icons';
import {
  AddFormInput,
  AddFormLabel,
} from '../PersonalForm/PersonalForm.styled';
import {
  AddFormTextArea,
  AddFormSexWrapper,
  AddFormSexLabel,
  AddFormImageWrapper,
  AddFormImageLabel,
  FileInput,
  FirstPartFormWrapper,
  SecondPartFormWrapper,
  MoreInfoFormWrapper,
  AddFormRadioWrapper,
  AddFormTextAreaLabel,
} from './MoreInfoForm.styled';
import { AddFormRadioButton } from '../ChooseForm/ChooseForm.styled';

const MoreInfo = ({ formData, setFormData, submit, backStep }) => {
  const [imageValue, setImageValue] = useState('');
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = e => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === 'file' ? files[0] : value;

    if (type === 'file') {
      setImageValue(value);
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  return (
    <>
      <MoreInfoFormWrapper category={formData.category}>
        <FirstPartFormWrapper category={formData.category}>
          {formData.category !== 'your-pet' && (
            <AddFormSexWrapper>
              <p>The Sex</p>
              <AddFormRadioWrapper>
                <AddFormRadioButton
                  type="radio"
                  id="female"
                  name="sex"
                  value="female"
                  onChange={handleInputChange}
                  checked={formData.sex === 'female'}
                />
                <AddFormSexLabel htmlFor="female">
                  <FemaleIcon stroke="#F43F5E" />
                  Female
                </AddFormSexLabel>
                <AddFormRadioButton
                  type="radio"
                  id="male"
                  name="sex"
                  value="male"
                  onChange={handleInputChange}
                  checked={formData.sex === 'male'}
                />
                <AddFormSexLabel htmlFor="male">
                  <MaleIcon stroke="#54ADFF" />
                  Male
                </AddFormSexLabel>
              </AddFormRadioWrapper>
            </AddFormSexWrapper>
          )}
          <AddFormImageLabel htmlFor="pet-image" category={formData.category}>
            {formData.category === 'your-pet' || viewportWidth < 768
              ? 'Add photo'
              : 'Load the pet’s image:'}
            <AddFormImageWrapper>
              {!formData.petPhoto && <PlusIcon width="30" height="30" />}
              {!!formData.petPhoto && (
                <img
                  id="image"
                  src={URL.createObjectURL(formData.petPhoto)}
                  alt={formData.petPhoto.name}
                />
              )}
            </AddFormImageWrapper>
            <FileInput
              type="file"
              id="pet-image"
              name="petPhoto"
              accept=".png, .jpg, .jpeg, .webp"
              onChange={handleInputChange}
              value={imageValue}
            />
            <ErrorMessage name="pet-image" component="div" />
          </AddFormImageLabel>
        </FirstPartFormWrapper>
        <SecondPartFormWrapper>
          {formData.category !== 'your-pet' && (
            <AddFormLabel htmlFor="location">
              Location
              <AddFormInput
                placeholder="Type of location"
                type="text"
                name="location"
                onChange={handleInputChange}
                value={formData.location}
              />
              <ErrorMessage name="location" component="div" />
            </AddFormLabel>
          )}
          {formData.category === 'sell' && (
            <AddFormLabel htmlFor="price">
              Price
              <AddFormInput
                placeholder="Type of price"
                type="number"
                name="price"
                onChange={handleInputChange}
                value={formData.price}
              />
              <ErrorMessage name="price" component="div" />
            </AddFormLabel>
          )}
          <AddFormTextAreaLabel htmlFor="comments">
            Comments
            <AddFormTextArea
              component="textarea"
              placeholder="Type comments"
              name="comments"
              onChange={handleInputChange}
              value={formData.comments}
            />
            <ErrorMessage name="comments" component="div" />
          </AddFormTextAreaLabel>
        </SecondPartFormWrapper>
      </MoreInfoFormWrapper>
      <AddFormButtonWrapper isMoreInfo={true} category={formData.category}>
        <AddFormButtonNext
          type="submit"
          text="Done"
          icon={<PawPrintIcon />}
          filled={true}
          clickHandler={submit}
          isDisabled={false}
        />
        <AddFormButtonBack
          type="button"
          clickHandler={backStep}
          text="Back"
          isLink={false}
        />
      </AddFormButtonWrapper>
    </>
  );
};

MoreInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default MoreInfo;
