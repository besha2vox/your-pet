import * as Yup from 'yup';

export const validatePetSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must not exceed 16 characters'),
  category: Yup.string()
    .required('Category is required')
    .oneOf(['my pet', 'sell', 'lost-found', 'for-free'], 'Invalid category'),
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must not exceed 16 characters'),
  birthday: Yup.string()
    .required('Date is required')
    .matches(
      /^(\d{2})\.(\d{2})\.(\d{4})$/,
      'Invalid date format. Use DD.MM.YYYY'
    ),
  breed: Yup.string()
    .required('Breed is required')
    .min(2, 'Breed must be at least 2 characters')
    .max(16, 'Breed must not exceed 16 characters'),
  file: Yup.mixed()
    .required('File is required')
    .test(
      'fileSize',
      'File size must not exceed 3MB',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  sex: Yup.string().when('category', {
    is: value => ['sell', 'lost-found', 'for-free'].includes(value),
    then: Yup.string()
      .required('Sex is required')
      .oneOf(['male', 'female'], 'Invalid sex'),
  }),
  location: Yup.string().when('category', {
    is: value => ['sell', 'lost-found', 'for-free'].includes(value),
    then: Yup.string()
      .required('Location is required')
      .matches(/^[A-Za-z\s]+$/, 'Invalid location format'),
  }),
  price: Yup.number().when('category', {
    is: 'sell',
    then: Yup.number()
      .positive('Price must be greater than 0')
      .required('Price is required'),
  }),
  comments: Yup.string()
    .min(8, 'Comments must be at least 8 characters')
    .max(120, 'Comments must not exceed 120 characters'),
});

export const isFieldValid = async (fieldName, value) => {
  try {
    await Yup.reach(validatePetSchema, fieldName).validate(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const validateField = async (fieldName, value, setErrors) => {
  console.log({ fieldName, value });
  try {
    await validatePetSchema.validateAt(fieldName, value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  } catch (error) {
    console.log(error);
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: error.message,
    }));
  }
};
