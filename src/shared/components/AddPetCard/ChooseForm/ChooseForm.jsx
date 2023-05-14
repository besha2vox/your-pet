import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  AddFormRadioButton,
  RadioCategoryLabel,
  CategoryWrapper,
} from './ChooseForm.styled';

const ChooseForm = ({ setCategory }) => {
  const [category, setLocalCategory] = useState('');

  const handleCategoryChange = event => {
    setCategory(event.target.value);
    setLocalCategory(event.target.value);
  };

  return (
    <CategoryWrapper>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="your-pet"
        id="your-pet"
        checked={category === 'your-pet'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="your-pet">Your pet</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="sell"
        id="sell"
        checked={category === 'sell'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="sell">Sell</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="lost-found"
        id="lost-found"
        checked={category === 'lost-found'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="lost-found">Lost/found</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="good-hands"
        id="good-hands"
        checked={category === 'good-hands'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="good-hands">
        In good hands
      </RadioCategoryLabel>
    </CategoryWrapper>
  );
};

ChooseForm.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ChooseForm;
