import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addNotice } from 'redux/notices/operations';

import MoreInfo from '../MoreInfoForm/MoreInfoForm';
import ChooseForm from '../ChooseForm/ChooseForm';
import PersonalForm from '../PersonalForm/PersonalForm';
// import validatePet from '../VaidatePet';
import AddFormButtonBack from '../AddFormBatton/AddFormBattonBack';
import AddFormButtonNext from '../AddFormBatton/AddFormBattonNext';
import { PawPrintIcon } from 'shared/utils/icons';

import {
  AddForm,
  AddFormTitle,
  AddFormList,
  AddFormItem,
  AddFormStepName,
  AddFormButtonWrapper,
} from './PetPageForm.styled';

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

const AddPetPageForm = () => {
  const [fileInput, setFileInput] = useState('');
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const backLink = location.state?.from ?? '/';

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const setClassName = index => {
    if (index > step) return '';
    if (index < step) return 'completed';
    return 'current';
  };

  const handleNextClick = e => {
    setStep(prevState => prevState + 1);
  };

  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
  };

  const handleSubmit = async values => {
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

    if (category === 'Add my pet') {
      return;
    }

    dispatch(addNotice(formData));

    formData.forEach((value, key) => console.log(key, ':', value));
    navigate(backLink);
  };

  const getPageTitle = useCallback(() => {
    const titles = {
      'your-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add to lost or found pet',
      'good-hands': 'Add to give a Pet for Adoption',
      '': 'Add Pet',
    };
    return titles[category] || 'Add Pet';
  }, [category]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);

  return (
    <>
      <AddFormTitle>{title}</AddFormTitle>
      <AddFormList>
        {steps.map((stepName, index) => (
          <AddFormItem
            key={index}
            // className={index <= step ? 'current' : 'completed'}
            className={setClassName(index)}
          >
            <AddFormStepName>{stepName}</AddFormStepName>
          </AddFormItem>
        ))}
      </AddFormList>
      <Formik
        initialValues={INITIAL_STATE}
        //  validationSchema={validatePet}
        onSubmit={handleSubmit}
      >
        <AddForm autoComplete="on">
          {step === 0 && <ChooseForm setCategory={setCategory} />}
          {step === 1 && <PersonalForm category={category} />}
          {step === 2 && (
            <MoreInfo
              fileInput={fileInput}
              setFileInput={setFileInput}
              category={category}
            />
          )}

          <AddFormButtonWrapper>
            {step < 2 && (
              <AddFormButtonNext
                type="button"
                text="Next"
                icon={<PawPrintIcon />}
                clickHandler={handleNextClick}
                filled={false}
              />
            )}

            {step === 2 && (
              <AddFormButtonNext
                type="submit"
                text="Done"
                icon={<PawPrintIcon />}
                filled={true}
                clickHandler={handleSubmit}
              />
            )}

            {step > 0 && (
              <AddFormButtonBack
                type="button"
                disabled={!category}
                clickHandler={handlePrevClick}
                text="Back"
                isLink={false}
              />
            )}

            {step === 0 && (
              <AddFormButtonBack text="Cancel" isLink={true} path={backLink} />
            )}
          </AddFormButtonWrapper>
        </AddForm>
      </Formik>
    </>
  );
};

export default AddPetPageForm;
