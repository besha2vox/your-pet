import { useState, useEffect, useCallback } from 'react';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addNotice } from 'redux/notices/operations';
import { addMyPet } from 'redux/auth/operations';
import { validatePetSchema } from '../vaidatePet';

import MoreInfo from '../MoreInfoForm/MoreInfoForm';
import ChooseForm from '../ChooseForm/ChooseForm';
import PersonalForm from '../PersonalForm/PersonalForm';
import Modal from 'shared/components/Modal/Modal';
import AddPetModal from '../AddPetModal/AddPetModal';

import { selectIsLoading } from 'redux/auth/selectors';
import { selectNoticesIsLoading } from 'redux/notices/selectors';

import {
  AddForm,
  AddFormTitle,
  AddFormList,
  AddFormItem,
  AddFormStepName,
  AddFormWrapper,
} from './PetPageForm.styled';

const AddPetPageForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    title: '',
    birthday: '',
    breed: '',
    location: '',
    comments: '',
    petPhoto: null,
    sex: '',
    price: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAddMyPetLoading = useSelector(selectIsLoading);
  const isAddPetLoading = useSelector(selectNoticesIsLoading);
  const isLoading = isAddMyPetLoading || isAddPetLoading;

  const getPageTitle = useCallback(() => {
    if (step < 1) return 'Add Pet';

    const titles = {
      'my-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add to lost or found pet',
      'for-free': 'Add to give a Pet for Adoption',
      '': 'Add Pet',
    };
    return titles[formData.category] || 'Add Pet';
  }, [formData.category, step]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

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

  const handleSubmit = async () => {
    if (!formData.category) return;

    const newFormData = new FormData();

    newFormData.append('name', formData.name);
    newFormData.append('birthday', formData.birthday);
    newFormData.append('breed', formData.breed);
    newFormData.append('pets-photo', formData.petPhoto);

    if (formData.comments) {
      newFormData.append('comments', formData.comments);
    }

    if (formData.category === 'my-pet') {
      dispatch(addMyPet(newFormData));
      toggleModal();
      return;
    }

    newFormData.append('titleOfAdd', formData.title);
    newFormData.append('sex', formData.sex);
    newFormData.append('location', formData.location);

    if (formData.category === 'lost-found') {
      dispatch(addNotice({ category: 'lost-found', newFormData }));
      toggleModal();
      return;
    }

    if (formData.category === 'for-free') {
      dispatch(addNotice({ category: 'in-good-hands', newFormData }));
      toggleModal();
      return;
    }

    newFormData.append('price', formData.price);

    if (formData.category === 'sell') {
      dispatch(addNotice({ category: formData.category, newFormData }));
      toggleModal();
    }
  };

  return (
    <AddFormWrapper step={step} category={formData.category}>
      <AddFormTitle>{title}</AddFormTitle>
      <AddFormList>
        {steps.map((stepName, index) => (
          <AddFormItem key={index} className={setClassName(index)}>
            <AddFormStepName>{stepName}</AddFormStepName>
          </AddFormItem>
        ))}
      </AddFormList>
      <Formik
        initialValues={formData}
        validationSchema={validatePetSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {() => (
          <AddForm autoComplete="on">
            {step === 0 && (
              <ChooseForm
                formData={formData}
                setFormData={setFormData}
                nextStep={handleNextClick}
                cancel={backLink}
              />
            )}
            {step === 1 && (
              <PersonalForm
                formData={formData}
                setFormData={setFormData}
                nextStep={handleNextClick}
                backStep={handlePrevClick}
              />
            )}
            {step === 2 && (
              <MoreInfo
                formData={formData}
                setFormData={setFormData}
                backStep={handlePrevClick}
                submit={handleSubmit}
              />
            )}
          </AddForm>
        )}
      </Formik>
      {isModalOpen && !isLoading && (
        <Modal toggleModal={() => navigate(backLink)}>
          <AddPetModal backLink={backLink} category={formData.category} />
        </Modal>
      )}
    </AddFormWrapper>
  );
};

export default AddPetPageForm;
