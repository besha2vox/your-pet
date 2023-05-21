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
  RegisterErrorMessage,
  LoginText,
  LoginLink,
} from './RegisterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { selectError } from 'redux/auth/selectors';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const fieldValidation = values => {
  console.log(values);
  const errors = {};
  if (!values.username) {
    errors.username = 'This field is required';
  } else if (/^\s+$/.test(values.username)) {
    errors.username = 'Username cannot be empty';
  }

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

  if (!values.confirmPassword) {
    errors.confirmPassword = 'This field is required';
  } else if (values.confirmPassword.length < 8) {
    errors.confirmPassword = 'Password must be at least 8 characters long';
  }

  return errors;
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(true);

  const navigate = useNavigate();

  const registerError = useSelector(selectError);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await dispatch(register(values));
      if (response.error) {
        setEmailAvailable(false);
      } else {
        setEmailAvailable(true);
        navigate('/user');
      }
    } catch (error) {
      console.error(error);
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
            <RegisterFormUsernameInputContainer
              error={errors.username && touched.username}
              style={{
                borderColor:
                  errors.username && touched.username ? '#F43F5E' : '#54ADFF',
              }}
            >
              <RegisterFormInput
                type="string"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && touched.username && values.username && (
                <ErrorIcon
                  onClick={() => {
                    resetForm({ values: { ...values, username: '' } });
                  }}
                >
                  <CrossIcon />
                </ErrorIcon>
              )}
            </RegisterFormUsernameInputContainer>
            {errors.username && touched.username && (
              <ErrorMessage>{errors.username}</ErrorMessage>
            )}
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
              />
              <PasswordIcon onClick={togglePasswordVisibility}>
                <EyeIcon>
                  {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                </EyeIcon>
              </PasswordIcon>
            </RegisterFormPasswordInputContainer>

            {errors.password && touched.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </RegisterFormPasswordContainer>

          <RegisterFormPasswordContainer>
            <RegisterFormPasswordInputContainer
              error={errors.confirmPassword && touched.confirmPassword}
            >
              <RegisterFormInput
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <PasswordIcon onClick={toggleConfirmPasswordVisibility}>
                <EyeIcon>
                  {showConfirmPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                </EyeIcon>
              </PasswordIcon>
            </RegisterFormPasswordInputContainer>

            {errors.confirmPassword && touched.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
            )}
          </RegisterFormPasswordContainer>

          {!emailAvailable && (
            <RegisterErrorMessage>
              This email is already in use. Please, try with another email or
              log in!
            </RegisterErrorMessage>
          )}

          <RegisterBtn type="submit" disabled={isSubmitting}>
            Registration
          </RegisterBtn>
          <LoginText>
            Already have an account?{' '}
            <LoginLink
              onClick={() => {
                navigate('/login');
              }}
            >
              Log In
            </LoginLink>
          </LoginText>
        </RegisterFormEl>
      )}
    </Formik>
  );
};

export default RegisterForm;
