import { Formik } from 'formik';
import { ReactComponent as OpenEyeIcon } from '../../../images/icons/eye-open.svg';
import { ReactComponent as CloseEyeIcon } from '../../../images/icons/eye-closed.svg';
import { ReactComponent as CrossIcon } from '../../../images/icons/cross-small.svg';
import { useState } from 'react';

import {
  RegisterFormEl,
  RegisterFormTitle,
  RegisterFormUsernamelContainer,
  RegisterFormUsernameInputContainer,
  RegisterFormEmailContainer,
  RegisterFormEmailInputContainer,
  RegisterFormInput,
  RegisterFormPasswordContainer,
  RegisterFormPasswordInputContainer,
  ErrorMessage,
  PasswordIcon,
  RegisterBtn,
  EyeIcon,
  ErrorIcon,
  LoginText,
  LoginLink,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

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

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await dispatch(register(values));
      navigate('/user');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={fieldValidation}
      validateOnChange={false}
      validateOnBlur={false}
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
        resetForm,
      }) => (
        <RegisterFormEl onSubmit={handleSubmit}>
          <RegisterFormTitle>Registration</RegisterFormTitle>
          <RegisterFormUsernamelContainer>
            <RegisterFormUsernameInputContainer>
              <RegisterFormInput
                type="string"
                name="username"
                placeholder="Username"
                value={values.email}
                onChange={handleChange}
                required
              />
            </RegisterFormUsernameInputContainer>
          </RegisterFormUsernamelContainer>

          <RegisterFormEmailContainer>
            <RegisterFormEmailInputContainer
              error={errors.email && touched.email}
              style={{
                borderColor:
                  errors.email && touched.email ? '#F43F5E' : '#54ADFF',
              }}
            >
              <RegisterFormInput
                type="string"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && values.email && (
                <ErrorIcon
                  onClick={() => {
                    resetForm({ values: { ...values, email: '' } });
                  }}
                >
                  <CrossIcon />
                </ErrorIcon>
              )}
            </RegisterFormEmailInputContainer>

            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </RegisterFormEmailContainer>

          <RegisterFormPasswordContainer>
            <RegisterFormPasswordInputContainer
              error={errors.password && touched.password}
            >
              <RegisterFormInput
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
            </RegisterFormPasswordInputContainer>

            {errors.password && touched.email && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </RegisterFormPasswordContainer>

          <RegisterFormPasswordContainer>
            <RegisterFormPasswordInputContainer
              error={errors.password && touched.password}
            >
              <RegisterFormInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Confirm password"
                value={values.password}
                onChange={handleChange}
                required
              />
              <PasswordIcon onClick={togglePasswordVisibility}>
                <EyeIcon>
                  {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                </EyeIcon>
              </PasswordIcon>
            </RegisterFormPasswordInputContainer>

            {errors.password && touched.email && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </RegisterFormPasswordContainer>

          <RegisterBtn type="submit" disabled={isSubmitting}>
            Registration
          </RegisterBtn>
          <LoginText>
            Already have an account? <LoginLink href="">Log In</LoginLink>
          </LoginText>
        </RegisterFormEl>
      )}
    </Formik>
  );
};

export default RegisterForm;
