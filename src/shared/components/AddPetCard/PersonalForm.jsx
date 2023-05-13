import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import validatePet from './VaidatePet';

const INITIAL_STATE = {
  category: '',
  name: '',
  birthday: '',
  breed: '',
  image: null,
  comments: '',
  sex: '',
  location: '',
  price: '',
};

const PersonalForm = ({ prevStep, nextStep, category }) => {
  const handleNextClick = () => {
    nextStep();
  };

  const handlePrevClick = () => {
    prevStep();
  };

  return (
    <div>
      <Formik initialValues={INITIAL_STATE} validationSchema={validatePet}>
        <Form autoComplete="on">
          {category !== 'your-pet' && (
            <label htmlFor="title">
              Title of add:
              <Field placeholder="Type title" type="text" name="title" />
              <ErrorMessage name="title" component="div" />
            </label>
          )}
          <label htmlFor="name">
            Name:
            <Field placeholder="Type name pet" type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="birthday">
            Birthday:
            <Field
              placeholder="Type date of birth"
              type="text"
              name="birthday"
              data-pattern="**.**.****"
            />
            <ErrorMessage name="birthday" component="div" />
          </label>
          <label htmlFor="breed">
            Breed:
            <Field placeholder="Type breed" type="text" name="breed" />
            <ErrorMessage name="breed" component="div" />
          </label>
          <button onClick={handlePrevClick}>Back</button>
          <button onClick={handleNextClick}>Next</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalForm;
