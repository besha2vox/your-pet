import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { register } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

import { ReactComponent as OpenEyeIcon } from '../../../images/icons/eye-open.svg';
import { ReactComponent as CloseEyeIcon } from '../../../images/icons/eye-closed.svg';
import { ReactComponent as CrossIcon } from '../../../images/icons/cross-small.svg';
import { ReactComponent as CheckIcon } from '../../../images/icons/check.svg';

import {
  RegisterFormEl,
  RegisterFormTitle,
  RegisterFormUsernameContainer,
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
  CheckMarkIcon,
  InfoMessage,
  RegisterErrorMessage,
  LoginText,
  LoginLink,
} from './RegisterForm.styled';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const fieldValidation = values => {
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
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
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
    const credentials = {
      email: values.email,
      password: values.password,
      username: values.username,
    };

    try {
      const response = await dispatch(register(credentials));
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
      }) => {
        const isPasswordValid = values.password && values.password.length >= 8;

        return (
          <RegisterFormEl onSubmit={handleSubmit}>
            <RegisterFormTitle>Registration</RegisterFormTitle>
            <RegisterFormUsernameContainer
              error={errors.username && touched.username}
            >
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
                  onBlur={handleBlur}
                  disabled={loading}
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
                <ErrorMessage name="username">{errors.username}</ErrorMessage>
              )}
            </RegisterFormUsernameContainer>

            <RegisterFormEmailContainer error={errors.email && touched.email}>
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
                  disabled={loading}
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
                <ErrorMessage name="email">{errors.email}</ErrorMessage>
              )}
            </RegisterFormEmailContainer>

            <RegisterFormPasswordContainer
              error={errors.password && touched.password}
            >
              <RegisterFormPasswordInputContainer
                error={errors.password && touched.password}
                style={{
                  borderColor:
                    errors.password && touched.password ? '#F43F5E' : '#54ADFF',
                }}
              >
                <RegisterFormInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                <PasswordIcon>
                  <EyeIcon
                    onClick={togglePasswordVisibility}
                    error={errors.password && touched.password}
                  >
                    {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </EyeIcon>
                  {/* {isPasswordValid && (
                    <CheckMarkIcon>
                      <CheckIcon />
                    </CheckMarkIcon>
                  )} */}
                  {errors.password && touched.password && values.password && (
                    <ErrorIcon
                      onClick={() => {
                        resetForm({ values: { ...values, password: '' } });
                      }}
                    >
                      <CrossIcon />
                    </ErrorIcon>
                  )}
                </PasswordIcon>
              </RegisterFormPasswordInputContainer>

              {errors.password && touched.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
              {/* {isPasswordValid && (
                <InfoMessage valid={isPasswordValid}>
                  Password is secure
                </InfoMessage>
              )} */}
            </RegisterFormPasswordContainer>

            <RegisterFormPasswordContainer
              error={errors.confirmPassword && touched.confirmPassword}
            >
              <RegisterFormPasswordInputContainer
                error={errors.confirmPassword && touched.confirmPassword}
                style={{
                  borderColor:
                    errors.confirmPassword && touched.confirmPassword
                      ? '#F43F5E'
                      : '#54ADFF',
                }}
              >
                <RegisterFormInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                <PasswordIcon>
                  <EyeIcon
                    onClick={toggleConfirmPasswordVisibility}
                    error={errors.confirmPassword && touched.confirmPassword}
                  >
                    {showConfirmPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </EyeIcon>
                  {/* {isPasswordValid && (
                    <CheckMarkIcon>
                      <CheckIcon />
                    </CheckMarkIcon>
                  )} */}
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    values.confirmPassword && (
                      <ErrorIcon
                        onClick={() => {
                          resetForm({
                            values: { ...values, confirmPassword: '' },
                          });
                        }}
                      >
                        <CrossIcon />
                      </ErrorIcon>
                    )}
                </PasswordIcon>
              </RegisterFormPasswordInputContainer>

              {errors.confirmPassword && touched.confirmPassword && (
                <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
              )}
              {/* {isPasswordValid && (
                <InfoMessage valid={isPasswordValid}>
                  Password is secure
                </InfoMessage>
              )} */}
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
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
