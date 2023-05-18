import { Formik } from 'formik';
import { ReactComponent as OpenEyeIcon } from '../../../images/icons/eye-open.svg';
import { ReactComponent as CloseEyeIcon } from '../../../images/icons/eye-closed.svg';
import { useState } from 'react';

import {
  LogInForm,
  LogInFormTitle,
  LogInFormEmailContainer,
  LogInFormEmailInputContainer,
  LogInFormInput,
  LogInFormPasswordContainer,
  LogInFormPasswordInputContainer,
  ErrorMessage,
  PasswordIcon,
  LogInBtn,
  EyeIcon,
  RegisterText,
  RegisterLink,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const fieldValidation = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Enter a valid Email';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  return errors;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await dispatch(logIn(values));
      setSubmitting(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={fieldValidation}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <LogInForm onSubmit={handleSubmit}>
          <LogInFormTitle>Log In</LogInFormTitle>
          <LogInFormEmailContainer>
            <LogInFormEmailInputContainer error={errors.email && touched.email}>
              <LogInFormInput
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </LogInFormEmailInputContainer>
            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </LogInFormEmailContainer>

          <LogInFormPasswordContainer>
            <LogInFormPasswordInputContainer
              error={errors.password && touched.password}
            >
              <LogInFormInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                required
              />
              <PasswordIcon onClick={togglePasswordVisibility}>
                <EyeIcon>
                  {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                </EyeIcon>
              </PasswordIcon>
            </LogInFormPasswordInputContainer>

            {errors.password && touched.email && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </LogInFormPasswordContainer>

          <LogInBtn type="submit" disabled={isSubmitting}>
            Log In
          </LogInBtn>
          <RegisterText>
            Don't have an account? <RegisterLink href="">Register</RegisterLink>
          </RegisterText>
        </LogInForm>
      )}
    </Formik>
  );
};

export default LoginForm;
