const validatePet = values => {
  const errors = {};

  // якщо не вибрана жодна категорія то автоматично буде вибрата категорія йор петс
  if (
    !values.category ||
    !['your-pet', 'sell', 'lost-found', 'good-hands'].includes(values.category)
  ) {
    values.category = 'your-pet';
  }

  //  імя обовязкове , якщо меньше 2 то видає помилку і більше 16 також видає помилку
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'Too Short!';
  } else if (values.name.length > 16) {
    errors.name = 'Too Long!';
  }

  if (!values.date) {
    errors.date = 'Required';
  } else if (!/^([0-9]{2}).([0-9]{2}).([0-9]{4})$/.test(values.date)) {
    errors.date = 'Invalid date format. Use DD.MM.YYYY';
  }

  // //  імя обовязкове , якщо меньше 2 то видає помилку і більше 16 також видає помилку
  if (!values.breed) {
    errors.breed = 'Required';
  } else if (values.breed.length < 2) {
    errors.breed = 'Breed should be at least 2 characters';
  } else if (values.breed.length > 16) {
    errors.breed = 'Breed should not exceed 16 characters';
  }

  //обмеження на розмір файлу

  if (values.file && values.file.size > 5000000) {
    errors.file = 'File size too large';
  }

  //  при виборі однієї із трьох категорій , появляється значення вибору статі який є обовязковим
  if (['sell', 'lost-found', 'good-hands'].includes(values.category)) {
    if (!values.sex) {
      errors.sex = 'Required';
    } else if (!['male', 'female'].includes(values.sex)) {
      errors.sex = 'Invalid value';
    }
    if (!values.location) {
      errors.location = 'Required';
    }

    if (values.category === 'sell' && (!values.price || values.price < 1)) {
      errors.price = 'Price should be more than 0';
    }

    if (values.comments && values.comments.length < 4) {
      errors.comments = 'Comments should be at least 8 characters';
    } else if (values.comments && values.comments.length > 120) {
      errors.comments = 'Comments should not exceed 120 characters';
    }
  }

  return errors;
};

export default validatePet;
