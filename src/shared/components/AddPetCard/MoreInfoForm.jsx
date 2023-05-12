import React, { useState } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
// import { useDispatch } from 'react-redux';

import validatePet from './VaidatePet';

const INITIAL_STATE = {
  category: '',
  title: '',
  name: '',
  birthday: '',
  breed: '',
  sex: '',
  image: null,
  location: '',
  price: '',
  comments: '',
};

const MoreInfo = ({ prevStep, category }) => {
  const [fileInput, setFileInput] = useState();
  //   const dispatch = useDispatch();

  const handleAddAvatar = e => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
    }
  };

  const handlePrevClick = () => {
    prevStep();
  };

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('category', values.category);
    formData.append('title', values.title);
    formData.append('name', values.name);
    formData.append('birthday', values.birthday);
    formData.append('breed', values.breed);
    formData.append('sex', values.sex);
    formData.append('image', fileInput);
    formData.append('location', values.location);
    formData.append('price', values.price);
    formData.append('comments', values.comments);
    // dispatch(createPetCard(formData));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_STATE}
        validationSchema={validatePet}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form autoComplete="on">
            {category !== 'your-pet' && (
              <>
                <p>The Sex</p>
                <label>
                  <Field
                    type="radio"
                    id="female"
                    name="sex"
                    value="female"
                    alt="female"
                    checked={values.sex === 'female'}
                    // hidden
                  />
                  <span></span>
                  <p>Female</p>
                </label>
                <label>
                  <Field
                    type="radio"
                    id="male"
                    name="sex"
                    value="male"
                    alt="male"
                    checked={values.sex === 'male'}
                    // hidden
                  />
                  <span></span>
                  <p>Male</p>
                </label>
              </>
            )}
            {/* <p></p> */}
            <label htmlFor="pet-image">
              Load the pet's image:
              {/* {fileInput  */}
              <img
                id="image"
                src={URL.createObjectURL(fileInput)}
                alt={fileInput.name}
                width="182px"
                height="182px"
              />
              {/* } */}
              <Field
                type="file"
                id="pet-image"
                name="pet-image"
                accept=".png, .jpg, .jpeg, .webp"
                onChange={e => handleAddAvatar(e, setFieldValue)}
                hidden
              />
              <ErrorMessage name="pet-image" component="div" />
            </label>
            {category !== 'your-pet' && (
              <label htmlFor="location">
                Location
                <Field
                  placeholder="Type of location"
                  type="text"
                  name="location"
                />
                <ErrorMessage name="location" component="div" />
              </label>
            )}
            {category === 'sell' && (
              <label htmlFor="price">
                Price
                <Field placeholder="Type of price" type="text" name="price" />
                <ErrorMessage name="price" component="div" />
              </label>
            )}
            <label htmlFor="comments">
              Comments
              <textarea placeholder="Type comments" name="comments" />
              <ErrorMessage name="comments" component="div" />
            </label>
            <button onClick={handlePrevClick}>Back</button>
            <button type="submit">Done</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MoreInfo;
