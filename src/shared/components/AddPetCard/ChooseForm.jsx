import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import validatePet from './VaidatePet';
import { useNavigate } from 'react-router-dom';

const INITIAL_STATE = {
  category: '',
  name: '',
  title: '',
  birthday: '',
  breed: '',
  location: '',
  comments: '',
  image: null,
  sex: '',
  price: '',
};

const ChooseForm = ({ nextStep, setCategory }) => {
  const [category, setCategoryLocal] = useState('');

  const navigate = useNavigate();

  const handleCategoryChange = event => {
    setCategoryLocal(event.target.value);
  };

  const handleCancelClick = () => {
    navigate(-1); ///Повернення на попередню сторінку
  };

  const handleNextClick = () => {
    setCategory(category);
    nextStep(); //// на наступну сторінку
  };

  return (
    <>
      <Formik initialValues={INITIAL_STATE} validationSchema={validatePet}>
        <Form autoComplete="on">
          <label>
            Your pet
            <Field
              type="radio"
              name="category"
              value="your-pet"
              checked={category === 'your-pet'}
              onChange={handleCategoryChange} ///зкрити
            />
          </label>
          <label>
            Sell
            <Field
              type="radio"
              name="category"
              value="sell"
              checked={category === 'sell'}
              onChange={handleCategoryChange} ///зкрити
            />
          </label>
          <label>
            Lost/found
            <Field
              type="radio"
              name="category"
              value="lost-found"
              checked={category === 'lost-found'}
              onChange={handleCategoryChange} ///зкрити
            />
          </label>
          <label>
            In good hands
            <Field
              type="radio"
              name="category"
              value="good-hands"
              checked={category === 'good-hands'}
              onChange={handleCategoryChange} ///зкрити
            />
          </label>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
          <button type="button" disabled={!category} onClick={handleNextClick}>
            Next
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ChooseForm;
