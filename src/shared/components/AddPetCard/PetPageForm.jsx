import React, { useState, useEffect, useCallback } from 'react';
import MoreInfo from './MoreInfoForm';
import ChooseForm from './ChooseForm';
import PersonalForm from './PersonalForm';

const AddPetPageForm = () => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const components = {
    1: (
      <ChooseForm
        nextStep={() => setStep(step + 1)}
        setCategory={setCategory}
      />
    ),
    2: (
      <PersonalForm
        prevStep={() => setStep(step - 1)}
        nextStep={() => setStep(step + 1)}
        category={category}
      />
    ),
    3: <MoreInfo prevStep={() => setStep(step - 1)} category={category} />,
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
    <div>
      <h1>{title}</h1>
      <ul>
        {steps.map((stepName, index) => (
          <li
            key={index}
            className={`step ${stepName <= step ? 'current' : 'completed'}`}
          >
            {stepName}
          </li>
        ))}
      </ul>
      {components[step]}
    </div>
  );
};

export default AddPetPageForm;
