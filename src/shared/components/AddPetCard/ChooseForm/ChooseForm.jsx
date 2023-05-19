import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
import { PawPrintIcon } from 'shared/utils/icons';

import {
  AddFormRadioButton,
  RadioCategoryLabel,
  CategoryWrapper,
} from './ChooseForm.styled';

const ChooseForm = ({ formData, setFormData, nextStep, cancel, setValues }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!formData.category) setIsDisabled(true);
    else setIsDisabled(false);
  }, [formData.category]);

  const handleCategoryChange = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <CategoryWrapper>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="your-pet"
        id="your-pet"
        onChange={handleCategoryChange}
        checked={formData.category === 'your-pet'}
      />
      <RadioCategoryLabel htmlFor="your-pet">Your pet</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="sell"
        id="sell"
        checked={formData.category === 'sell'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="sell">Sell</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="lost-found"
        id="lost-found"
        checked={formData.category === 'lost-found'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="lost-found">Lost/found</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="good-hands"
        id="good-hands"
        checked={formData.category === 'good-hands'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="good-hands">
        In good hands
      </RadioCategoryLabel>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          isDisabled={isDisabled}
          type="button"
          text="Next"
          icon={<PawPrintIcon />}
          clickHandler={nextStep}
          filled={false}
        />
        <AddFormButtonBack text="Cancel" isLink={true} path={cancel} />
      </AddFormButtonWrapper>
    </CategoryWrapper>
  );
};

ChooseForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  cancel: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  nextStep: PropTypes.func.isRequired,
};

export default ChooseForm;
