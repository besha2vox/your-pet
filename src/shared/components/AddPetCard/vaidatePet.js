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
  petPhoto: Yup.mixed()
    .required('File is required')
    .test(
      'fileSize',
      'File size must not exceed 3MB',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  sex: Yup.string()
    .required('Sex is required')
    .oneOf(['male', 'female'], 'Invalid sex'),
  location: Yup.string()
    .required('Location is required')
    .matches(/^[A-Za-z\s]+$/i, 'Invalid location format'),
  price: Yup.number()
    .positive('Price must be greater than 0')
    .required('Price is required'),
  comments: Yup.string().test(
    'comments',
    'Comments must be between 8 and 120 characters',
    value => {
      if (!value) {
        return true;
      }
      return value.length >= 8 && value.length <= 120;
    }
  ),
});

export const validateField = async (fieldName, value, setErrors) => {
  try {
    await validatePetSchema.validateAt(fieldName, value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  } catch (error) {
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: error.message,
    }));
  }
};
